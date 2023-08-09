import React from "react";
import { useContext } from "react";
// import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";
// react.fc functional component,. to define that props has children property
// const Todos: React.FC<{ items: string[] }> = (props) => {
const Todos: React.FC
// <{ items: Todo[]; onRemoveTodo: (id: string) => void }> 
= (
//   props
) => {
const todosCtx = useContext(TodosContext)
  return (
    <ul className={classes.todos}>
      {/* {props.items.map((item) => ( */}
        {todosCtx.items.map((item) => (
        // <li key={item}>{item}</li>
        // <li key={item.id}>{item.text}</li>
        //bind preconfigure js function for future execution, so we dont have to update everywhere the id type
        <TodoItem
          key={item.id}
          text={item.text}
        //   onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
