
export default function Progress({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
       <div className='progress-tracker'>
        <p>
            {completed} out of {total} tasks Completed
        </p>

        <div className='progress-bar'>
            <div className='progress'
            style={{width: `${percent}%`}}>
            </div>
        </div>
    </div>
  );
}
