import React from "react";
import Todo from "../models/todo";
import { useState } from "react";

//type alias
type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

//2nd part - concrete js function, first pure type definition
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
    //////////////////////////////// from app.js
  //if empty array, the todos are type never (ts doesnt know) Therefore we must define, we want type array of todos
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [new Todo("learn r"), new Todo("learn ts")];
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)
    //update the state
    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo)
    });
  };
  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=> todo.id !== todoId);
    })
  };
  ////////////////////////////
  const contextValue: TodosContextObj = {
    items:todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  };
  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};

export default TodosContextProvider