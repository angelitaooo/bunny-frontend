import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useMutation, queryCache } from 'react-query';
import { createTask } from '../data/api';
import Button from './Button';
import LinkButton from './LinkButton';

const NewTask = () => {
  const history = useHistory();
  const { userId } = useParams();
  const [taskName, setTaskName] = useState('');
  const [mutate] = useMutation(createTask, {
    onSuccess: () => {
      queryCache.refetchQueries('tasks');
    },
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!taskName) {
      return;
    }

    try {
      await mutate({ taskName, userId });
      history.push(`/users/${userId}`);
    } catch (error) {
      console.log(error.error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div>
        <label
          htmlFor="task"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          What do you want to accomplish?
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="task"
            className="form-input block w-full sm:text-sm sm:leading-5"
            placeholder="Complete the test"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center justify-end flex-wrap sm:flex-no-wrap max-w-7xl mx-auto mt-3">
        <LinkButton to={`/users/${userId}`} kind="secondary">
          Cancel
        </LinkButton>
        <div className="ml-3 block">
          <Button type="submit" kind="primary">
            Create task
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NewTask;
