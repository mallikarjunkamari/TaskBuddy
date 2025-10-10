import TaskList from "./Components/Tasklist";
import ProgressTracker from "./Components/Progresstracket";
import TaskForm from "./Components/Taskform";
export default function App() {
  return (
    <div className="task-form">
      <h1>Task Buddy</h1>
      <p>Your friendly task manager</p>
      <TaskForm />
      <TaskList />
      <ProgressTracker />
    </div>
  );
}