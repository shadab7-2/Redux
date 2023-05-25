import React from "react";
import  ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm"

const rootElement = document.getElementById("root");

   ReactDOM.render(
  <Provider store={store}>
    <> 
    <TodoList />
    <AddTodoForm />
    </>
    
  </Provider>,
    document.getElementById('root')
);
