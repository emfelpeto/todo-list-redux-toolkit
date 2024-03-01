import './App.css'
import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
