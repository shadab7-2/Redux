import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from '../actions/todoActions';

const AddTodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === '') {
      return;
    }
    const newTodo = {
      name: todoText,
      id: Date.now().toString(),
      status: 'pending'
    };
    addTodo(newTodo);
    setTodoText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={handleInputChange}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default connect(null, { addTodo })(AddTodoForm);
