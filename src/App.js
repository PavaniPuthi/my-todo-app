import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore
import taskReducer from './reducers/taskReducer';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css'

const store = configureStore({
  reducer: taskReducer, 
});

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React To-Do App</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
