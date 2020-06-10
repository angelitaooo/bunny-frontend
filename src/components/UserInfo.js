import React from 'react';
import LinkInline from './LinkInline';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../data/api';
import { useQuery } from 'react-query';

const UserInfo = ({ name, taskNumber }) => {
  const { userId } = useParams();
  const { status, data, error } = useQuery(
    userId && ['user', userId],
    fetchUser,
  );

  if (status !== 'success') {
    return null;
  }
  return (
    <div className="mb-3">
      <h2 className="text-3xl font-black text-gray-800">{data.user.name}</h2>
      <LinkInline to={`/users/${userId}/edit`}>Edit {name}</LinkInline>
    </div>
  );
};

export default UserInfo;
