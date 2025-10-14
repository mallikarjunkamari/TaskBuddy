import React from 'react';

export default function Tasklist({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(index, updatedTask);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <div>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </span>
            <small> ({task.priority}, {task.category})</small>
          </div>

          <div>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
