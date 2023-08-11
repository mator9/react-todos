import React from "react";
// import { useState } from "react";
import Todos from "./components/Todos";
// import logo from "./logo.svg";
import "./App.css";
// import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";
import PWAOfflineStatus from "./components/PWAOfflineStatus";
import AddHomescreenPrompt from "./components/AddHomescreenPrompt"

//1. we need to use state to manage the array todos, so the app component updates when it changes
// 2 . we need a way to communicate from new todo back to app component create a function in new todo, that wi

function App() {
//move all the stuff to context

  return (
    // <div>
    //   <NewTodo onAddTodo={addTodoHandler} />
    //   <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    // </div>
    <TodosContextProvider>
      <NewTodo/>
      <Todos/>
      <PWAOfflineStatus />
      <AddHomescreenPrompt/>
  </TodosContextProvider>
  );
}

export default App;
