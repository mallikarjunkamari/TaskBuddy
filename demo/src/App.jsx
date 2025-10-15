import { useEffect, useState } from 'react';
import Taskform from './Components/Taskform.jsx';
import Tasklist from './Components/Tasklist.jsx';
import Progress from './Components/Progress.jsx';
import './Style.css';
export default function App() {
  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage on startup
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };

  const updateTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

return (
  <div className="app-wrapper">
    <div className="app-container">
      <div className="header">
        <h1>Task Buddy</h1>
        <p>Your friendly Task Manager</p>
      </div>

      <Taskform addTask={addTask} />
      <Tasklist tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <Progress tasks={tasks} />

      {tasks.length > 0 && (
        <button onClick={clearAllTasks} className="clear-btn">
          Clear All Tasks
        </button>
      )}
    </div>
  </div>
);


}
