import React from 'react';
import Button from './Button';
import LinkButton from './LinkButton';
import { useParams } from 'react-router-dom';

const EditUser = () => {
  const { userId } = useParams();
  function handleSubmit(e) {
    e.preventDefault();

    console.log('submitting');
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Name
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="name"
            className="form-input block w-full sm:text-sm sm:leading-5"
            placeholder="John Doe"
          />
        </div>
      </div>
      <div className="flex items-center justify-end flex-wrap sm:flex-no-wrap max-w-7xl mx-auto mt-3">
        <LinkButton to={`/users/${userId}`} kind="secondary">
          Cancel
        </LinkButton>
        <div className="ml-3 block">
          <Button type="submit" kind="primary">
            Update user
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EditUser;
