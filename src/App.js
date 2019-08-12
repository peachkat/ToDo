import React, { memo } from "react";
//import ReactDOM from "react-dom";
import { useInputValue, useTodos } from "./custom-hooks";
import Layout from "./Layout";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
//another goal: 
//making sure to do list resets every 24 hours
//goal if finished with app issues:
//speech recognition for adding to do items? Look at: https://www.npmjs.com/package/react-speech-recognition


const App = memo(props => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemCheck={idx => checkTodo(idx)}
        onItemRemove={idx => removeTodo(idx)}
      />
    </Layout>
  );
});

//const rootElement = document.getElementById("root");
//ReactDOM.render(<TodoApp />, rootElement);

export default App;
