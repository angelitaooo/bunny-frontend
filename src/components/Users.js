import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { fetchUsers } from '../data/api';
import { useQuery } from 'react-query';
//components
import UsersTable from './UsersTable';
import NewUser from './NewUser';
import EditUser from './EditUser';
import UserInfo from './UserInfo';
import NewTask from './NewTask';
import Tasks from './Tasks';
import DeleteUser from './DeleteUser';

const Users = () => {
  const { status, data, error } = useQuery('users', fetchUsers);
  if (status !== 'success') {
    return null;
  }
  return (
    <React.Fragment>
      <Switch>
        <Route path="/users" exact>
          <UsersTable users={data.users} />
        </Route>
        <Route path="/users/new">
          <NewUser />
          <UsersTable users={data.users} />
        </Route>
        <Route path="/users/:userId" exact>
          <UserInfo />
          <Tasks />
        </Route>
        <Route path="/users/:userId/edit">
          <UserInfo />
          <EditUser />
          <Tasks />
        </Route>
        <Route path="/users/:userId/delete">
          <UserInfo />
          <Tasks />
          <DeleteUser />
        </Route>
        <Route path="/users/:userId/tasks/new">
          <NewTask />
          <UserInfo />
          <Tasks />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Users;
