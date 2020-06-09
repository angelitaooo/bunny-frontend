import React from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';
import LinkButton from './LinkButton';

const NewTask = () => {
  const { userId } = useParams();

  function handleSubmit(e) {
    e.preventDefault();

    console.log('submitting');
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
