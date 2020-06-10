import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useMutation, queryCache } from 'react-query';
import { deleteUser } from '../data/api';
import DeleteModal from './DeleteModal';

const DeleteUser = () => {
  const { userId } = useParams();
  const history = useHistory();

  const [mutate] = useMutation(deleteUser, {
    onSuccess: () => {
      queryCache.refetchQueries('users');
    },
  });

  async function handleClick(e) {
    e.preventDefault();

    try {
      await mutate({ userId });
      history.push(`/users`);
    } catch (error) {
      console.log(error.error);
    }
  }

  return (
    <DeleteModal
      userId={userId}
      onClick={handleClick}
      onCancel={`/users/${userId}`}
    />
  );
};

export default DeleteUser;
