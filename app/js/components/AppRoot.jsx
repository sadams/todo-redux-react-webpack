import React from 'react';
import { Provider } from 'react-redux';

import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Footer from './Footer.jsx';
import store from '../store';


const TodoApp = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

export default (
  <Provider store={store}>
    <TodoApp />
  </Provider>
)