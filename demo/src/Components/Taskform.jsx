
import React, { useState } from "react";

function Taskform({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("general");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask({ text: task.trim(), priority, category });
    setTask("");
    setPriority("Medium");
    setCategory("general");
  };

  return (
      <form onSubmit={handleSubmit} className="task-form">
      <div id="inp">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </div>

      <div id="btns">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>general</option>
          <option>work</option>
          <option>personal</option>
        </select>
      </div>
    </form>


  );
}

export default Taskform;
