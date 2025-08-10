// src/components/Tasks.jsx
import React from 'react';

const Tasks = ({ tasks, onDelete, onToggleComplete }) => {
  return (
    <div className="tasks-container">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id} className="task-item">
            <span
              className={`task-name ${task.completed ? 'completed' : ''}`}
              onClick={() => onToggleComplete(task.id)}
            >
              {task.name}
            </span>
            <button onClick={() => onDelete(task.id)} className="delete-button">Delete</button>
          </div>
        ))
      ) : (
        <p className="no-tasks-message">No tasks to display!</p>
      )}
    </div>
  );
};

export default Tasks;
