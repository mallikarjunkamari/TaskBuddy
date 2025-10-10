import { useState } from "react";

function TaskForm() {
    const[task, setTask]= useState("");
    const[priority, setPriority]= useState("Medium");
    const[category, setCategory]= useState("general");
    return(
    
        <form id="task-form">
            <div id="inp">
                <input type="text" placeholder="Enter your task" onChange={(e)=>setTask(e.target.value)} />
                <span><button type="submit">Add Task</button></span>
                {/* <p>{task}</p> */}
            </div>
           
            <div id="btn">
                <select onChange={(e)=>setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <select onChange={(e)=>setCategory(e.target.value)}>
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
            {/* <h1>{task} {priority} {category}</h1> */}
        </form>

    )
}
export default TaskForm;
