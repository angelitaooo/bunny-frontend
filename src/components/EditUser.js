import React, { useState } from 'react';
import Button from './Button';
import LinkButton from './LinkButton';
import { useParams, useHistory } from 'react-router-dom';
import { useMutation, queryCache } from 'react-query';
import { updateUser } from '../data/api';

const EditUser = () => {
  const history = useHistory();
  const { userId } = useParams();
  const [userName, setUserName] = useState('');
  const [mutate] = useMutation(updateUser, {
    onSuccess: () => {
      queryCache.refetchQueries('user');
      queryCache.refetchQueries('users');
    },
  });
  async function handleSubmit(e) {
    e.preventDefault();
    if (!userName) {
      return;
    }

    try {
      await mutate({ name: userName, userId });
      history.push(`/users/${userId}`);
    } catch (error) {
      console.log(error.error);
    }
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
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
