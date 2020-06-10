import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchTasks } from '../data/api';
import { useQuery } from 'react-query';

const Task = ({ children, done, onClick }) => {
  const striketrough = done ? 'line-through text-gray-400' : 'text-gray-700';
  return (
    <li className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out border border-gray-200 cursor-pointer">
      <button className="block min-w-full" onClick={onClick}>
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div
              className={`${striketrough} text-sm leading-5 font-medium truncate`}
            >
              {children}
            </div>
          </div>
        </div>
      </button>
    </li>
  );
};

const Tasks = ({ tasks }) => {
  const { userId } = useParams();
  const { status, data } = useQuery(['tasks', userId], fetchTasks);

  if (status !== 'success') {
    return null;
  }

  function handleClick(taskId) {
    console.log(`Clicked Task #${taskId}`);
  }

  return (
    <ul className="mt-4">
      {data.tasks.map((task) => (
        <Task
          key={task.id}
          done={task.state === 'done'}
          onClick={() => handleClick(task.id)}
        >
          {task.taskName}
        </Task>
      ))}
    </ul>
  );
};

export default Tasks;
