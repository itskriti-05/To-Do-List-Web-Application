// src/App.jsx
import React, { useState } from 'react';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Learn React Hooks', completed: false },
    { id: 2, name: 'Build a To-Do App', completed: true },
    { id: 3, name: 'Deploy the App', completed: false },
  ]);

  const addTask = (taskName) => {
    const newTask = {
      id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>To-Do List App</h1>
      <AddTask onAdd={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
