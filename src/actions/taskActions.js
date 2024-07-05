// actions/taskActions.js
export const addTask = (text) => ({
    type: 'ADD_TASK',
    payload: { text },
  });
  
  export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: { taskId },
  });
  
  export const toggleTaskCompletion = (taskId) => ({
    type: 'TOGGLE_TASK_COMPLETION',
    payload: { taskId },
  });
  
  export const editTask = (taskId, newText) => ({
    type: 'EDIT_TASK',
    payload: { taskId, newText },
  });
  
  