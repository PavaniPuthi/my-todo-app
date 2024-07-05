import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';
import './TaskInput.css'

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        className='input-box'
        placeholder='What needs to be done in this month?'
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button className='button-styling' onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;

