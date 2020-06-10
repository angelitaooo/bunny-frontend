import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { fetchUsers } from '../data/api';
import { useQuery } from 'react-query';
//components
import UsersTable from './UsersTable';
import fakeData from '../data/fakeData';
import NewUser from './NewUser';
import EditUser from './EditUser';
import UserInfo from './UserInfo';
import NewTask from './NewTask';
import Tasks from './Tasks';

const Users = () => {
  const { status, data, error } = useQuery('users', fetchUsers);
  if (status !== 'success') {
    return null;
  }
  return (
    <React.Fragment>
      <Switch>
        <Route path="/users" exact>
          <UsersTable users={data.user} />
        </Route>
        <Route path="/users/new">
          <NewUser />
          <UsersTable users={data.user} />
        </Route>
        <Route path="/users/:userId" exact>
          <UserInfo />
          <Tasks tasks={fakeData.tasks} />
        </Route>
        <Route path="/users/:userId/edit">
          <UserInfo />
          <EditUser />
          <Tasks tasks={fakeData.tasks} />
        </Route>
        <Route path="/users/:userId/delete">
          <UserInfo />
          <div>Delete users</div>
        </Route>
        <Route path="/users/:userId/tasks/new">
          <NewTask />
          <UserInfo />
          <Tasks tasks={fakeData.tasks} />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Users;
