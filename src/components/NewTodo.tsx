import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css"
//we need to modify a function type, we dont need a return value here so we just return void. It takes one parameter of type string
// const NewTodo:React.FC<{onAddTodo: (text: string)=> void}> = (props) => {
const NewTodo:React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
   const todosCtx =  useContext(TodosContext);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    //? is undefined if it fails, ! when you are sure it cant fail
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
    // props.onAddTodo(enteredText)
    todosCtx.addTodo(enteredText)
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef}></input>
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
