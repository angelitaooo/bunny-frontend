import React, { useState } from 'react';
import Button from './Button';
import LinkButton from './LinkButton';
import { createUser } from '../data/api';
import { useMutation, queryCache } from 'react-query';
import { useHistory } from 'react-router-dom';

const NewUser = () => {
  const [userName, setUserName] = useState('');
  const [mutate] = useMutation(createUser, {
    onSuccess: () => {
      queryCache.refetchQueries('users');
    },
  });
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!userName) {
      return;
    }

    try {
      await mutate(userName);
      history.push('/users');
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
        <LinkButton to="/users" kind="secondary">
          Cancel
        </LinkButton>
        <div className="ml-3 block">
          <Button type="submit" kind="primary">
            Create user
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NewUser;
