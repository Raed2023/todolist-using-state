import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  state={ 
    todos: [],
    newTodo: ''
  };

  handleInputChange = e => {
    this.setState({ newTodo: e.target.value });
  }

  handleDelete = index => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((todo, i) => i !== index);
    this.setState({ todos: updatedTodos });
  }

  handleSubmit = e => {
    e.preventDefault();
    // The preventDefault() method is a built-in method in JavaScript that is used to stop the default behavior of an event. In the context of a form submission in a React component, calling preventDefault() prevents the default action of the form from taking place, which is to reload the page
    const { todos, newTodo } = this.state;
    const updatedTodos = todos.concat({ text: newTodo });
    // The concat() method is used to merge two or more arrays. In the context of the Todo List example, the concat() method is used to add a new todo item to the existing array of todos.
    this.setState({ todos: updatedTodos, newTodo: '' });
  }

  render() {
    const { todos, newTodo } = this.state;

    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={newTodo} onChange={this.handleInputChange} />
          <button>Add Task</button>
        </form>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.text}
              <button className="delete-btn" onClick={() => this.handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
