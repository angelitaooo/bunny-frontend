import React from 'react';
import LinkButton from './LinkButton';
import PageTitle from './PageTitle';

const AllUsersNavigation = () => {
  return (
    <PageTitle title="All Users">
      <LinkButton kind="primary" to="/users/new">
        Add user
      </LinkButton>
    </PageTitle>
  );
};

export default AllUsersNavigation;
