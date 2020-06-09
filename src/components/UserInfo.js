import React from 'react';
import LinkInline from './LinkInline';
import { useParams } from 'react-router-dom';

const UserInfo = ({ name, taskNumber }) => {
  const { userId } = useParams();
  return (
    <div className="mb-3">
      <h2 className="text-3xl font-black text-gray-800">{name}</h2>
      <h3 className="text-2xl font-bold text-gray-500">{taskNumber} tasks</h3>
      <LinkInline to={`/users/${userId}/edit`}>Edit {name}</LinkInline>
    </div>
  );
};

export default UserInfo;
