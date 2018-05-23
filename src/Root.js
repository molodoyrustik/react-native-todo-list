import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';

export default class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.props.initialData
    };

   this.handleStatusChange = this.handleStatusChange.bind(this);
   this.handleDelete = this.handleDelete.bind(this);
   this.handleAdd = this.handleAdd.bind(this);
   this.handleEdit = this.handleEdit.bind(this);
  }

  nextId() {
    this._nextId = this._nextId || 4;
    return this._nextId++;
  }

  handleStatusChange(id) {
    let todos = this.state.todos.map( (todo) => {
      if( todo.id == id) {
        todo.completed = !todo.completed
      }
      return todo;
    });

    this.setState({ todos });
  }

  handleAdd(title) {
    let todo = {
      title,
      completed: false,
      id: this.nextId()
    };

    let todos = [...this.state.todos, todo];

    this.setState({ todos });
  }

  handleDelete(id) {
    let todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({ todos });
  }

  handleEdit(id, title) {
    let todos = this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.title = title;
      }

      return todo;
    })

    this.setState({ todos })
  }

  render() {
    return (
      <View>
        <Header title={this.props.title} todos={this.state.todos}/>

          {
            this.state.todos.map((todo) =>
              <Todo
                id={todo.id}
                key={todo.id}
                title={todo.title}
                completed={todo.completed}
                onStatusChange={this.handleStatusChange}
                onDelete={this.handleDelete}
                onEdit={this.handleEdit}
              />
            )
          }

          <Form onAdd={this.handleAdd}/>
      </View>
    )
  }
}
