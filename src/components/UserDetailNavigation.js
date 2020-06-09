import React from 'react';
import { useParams } from 'react-router-dom';
import LinkButton from './LinkButton';
import PageTitle from './PageTitle';

const UserDetailNavigation = () => {
  const { userId } = useParams();
  return (
    <PageTitle title="Tasks">
      <LinkButton kind="primary" to={`/users/${userId}/tasks/new`}>
        Add task
      </LinkButton>
    </PageTitle>
  );
};

export default UserDetailNavigation;
