import React from 'react'
import {connect} from 'react-redux';
import TodoList from './conponents/TodoList'
import AddTodoForm from './conponents/AddTodoForm';

const App = ({todos}) =>{
  return(
     <div>
      <h1>Todo App</h1>
      <AddTodoForm/>
      <TodoList todos = {todos}/>
     </div>
  );
};

const mapStateToProps = (state) => {
  return{
    todos: state.todos
  }
};

export default connect(mapStateToProps(App));