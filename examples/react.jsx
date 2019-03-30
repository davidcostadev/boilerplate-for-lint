import React from 'react';
import fetch from 'fetch';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTodo: '',
      todos: [],
    };
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8000/todos');
    const todos = await response.json();
    this.setState({
      todos,
    });
  }

  handleTextInput = e => {
    const {
      target: { value },
    } = e;
    this.setState({
      currentTodo: value,
    });
  };

  addTodo = () => {
    const { todos, currentTodo } = this.state;

    const id = todos.slice(-1)[0].id + 1;
    const todo = currentTodo;
    this.setState(
      {
        todos: [
          ...todos,
          {
            id,
            title: currentTodo,
          },
        ],
        currentTodo: '',
      },
      () => {
        fetch('http://localhost:8000/todos', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id,
            title: todo,
          }),
        });
      },
    );
  };

  render() {
    const { todos } = this.state;
    return (
      <React.Fragment>
        <ul>
          {todos.map(todo => (
            <li key="todo.id">{todo.title}</li>
          ))}
        </ul>
        <input type="text" onChange={this.handleTextInput} />
        <button type="button" onClick={this.addTodo}>
          Add
        </button>
        <img src="image.svg" alt="title" />
      </React.Fragment>
    );
  }
}

export default Todo;
