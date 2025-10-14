export default function Progress({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div>
      <h2>Progress Tracker</h2>
      {/* <p>{completed} of {total} tasks completed ({percent}%)</p> */}
    </div>
  );
}
