// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//     </div>
//   );
// }

// export default App;

//ABOVE was the app before adding the custom hooks. 
//Stuff below is actually supposed to be in index.js, but I don't know
//how to change app.js so this works
//Following tutorial from : 
//https://blog.blackbox-vision.tech/making-a-beautiful-todo-app-using-react-hooks-material-ui/?source=post_page-----52dacf3245f4----------------------


import React, { memo } from 'react';
import './App.css'; //Added line from above
import './styles.css';
import ReactDOM from 'react-dom';
import { useInputValue, useTodos } from './custom-hooks';

import Layout from './components/Layout';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const TodoApp = memo(props => {
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

ReactDOM.render(<TodoApp />, document.getElementById('root'));