import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import DeleteModal from './DeleteModal';

const DeleteUser = () => {
  const { userId } = useParams();
  const history = useHistory();

  function handleClick() {
    console.log(`Deleted user #${userId}`);
    history.push(`/users/${userId}`);
  }

  return <DeleteModal userId={userId} onClick={handleClick} />;
};

export default DeleteUser;
