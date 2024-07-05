import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion, editTask } from '../actions/taskActions';
import { MdDeleteOutline } from "react-icons/md";
import { FaCheckCircle } from 'react-icons/fa';
import './TaskList.css'

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTaskCompletion(taskId));
  };

  const handleEditTask = (taskId, newText) => {
    dispatch(editTask(taskId, newText));
    setEditingTaskId(null); // Clear
  };

  const handleStartEditing = (taskId, text) => {
    setEditingTaskId(taskId);
    setEditedText(text);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          className={task.completed ? 'completed' : ''}
        >
          {editingTaskId === task.id ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          ) : (
            <span className='todo-styling' onClick={() => handleStartEditing(task.id, task.text)}>
              {task.text}
            </span>
          )}
          
          <button className='button-backgrounds' onClick={() => handleDeleteTask(task.id)}><MdDeleteOutline  /></button>
          <button className='button-backgrounds' onClick={() => handleToggleTask(task.id)}><FaCheckCircle  /></button>
          {editingTaskId === task.id && (
            <button className='button-styling' onClick={() => handleEditTask(task.id, editedText)}>Save</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
