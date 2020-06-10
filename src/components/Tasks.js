import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchTasks, updateTask } from '../data/api';
import { useQuery, useMutation, queryCache } from 'react-query';

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
  const history = useHistory();
  const { status, data } = useQuery(['tasks', userId], fetchTasks);
  const [mutate] = useMutation(updateTask, {
    onSuccess: () => {
      queryCache.refetchQueries('tasks');
    },
  });

  if (status !== 'success') {
    return null;
  }

  async function handleClick({ id, taskName, state }) {
    const newState = state === 'done' ? 'todo' : 'done';
    try {
      await mutate({ taskName, userId, taskId: id, state: newState });
      history.push(`/users/${userId}`);
    } catch (error) {
      console.log(error.error);
    }
  }

  return (
    <ul className="mt-4">
      {data.tasks.map((task) => (
        <Task
          key={task.id}
          done={task.state === 'done'}
          onClick={() => handleClick(task)}
        >
          {task.taskName}
        </Task>
      ))}
    </ul>
  );
};

export default Tasks;
