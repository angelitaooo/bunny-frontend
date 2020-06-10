import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchTasks, updateTask } from '../data/api';
import { useQuery, useMutation, queryCache } from 'react-query';

const Task = ({ children, done, onBlur }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(children);
  const striketrough = done ? 'line-through text-gray-400' : 'text-gray-700';

  function handleOnBlur() {
    setIsEditing(false);
    onBlur(newTaskName);
  }

  return (
    <div className="flex items-center">
      {isEditing ? (
        <div className="relative rounded-md shadow-sm">
          <input
            id="taskName"
            className={`form-input block w-full sm:text-sm sm:leading-5`}
            onBlur={handleOnBlur}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder="Update your task - Should not be blank"
            value={newTaskName}
            autoFocus
          />
        </div>
      ) : (
        <div>
          <span
            className={`${striketrough}`}
            onClick={() => setIsEditing(true)}
          >
            {children}
          </span>
        </div>
      )}
    </div>
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

  async function handleUpdateTask({ id, taskName, state }) {
    try {
      await mutate({ taskName, userId, taskId: id, state });
      history.push(`/users/${userId}`);
    } catch (error) {
      console.log(error.error);
    }
  }

  return (
    <ul className="mt-4">
      {data.tasks.map((task) => (
        <li className="block flex justify-start">
          <div className="flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out mr-3"
              onChange={() =>
                handleUpdateTask({
                  id: task.id,
                  taskName: task.taskName,
                  state: task.state === 'done' ? 'todo' : 'done',
                })
              }
            />
          </div>
          <Task
            key={task.id}
            done={task.state === 'done'}
            onBlur={(newTaskName) =>
              handleUpdateTask({
                id: task.id,
                taskName: newTaskName,
                state: task.state,
              })
            }
          >
            {task.taskName}
          </Task>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
