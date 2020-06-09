import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersTable from './UsersTable';
import fakeData from '../data/fakeData';
import NewUser from './NewUser';
import EditUser from './EditUser';
import UserInfo from './UserInfo';
import NewTask from './NewTask';
import Tasks from './Tasks';

const Users = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/users" exact>
          <UsersTable users={fakeData.users} />
        </Route>
        <Route path="/users/new">
          <NewUser />
          <UsersTable users={fakeData.users} />
        </Route>
        <Route path="/users/:userId" exact>
          <UserInfo name="Angela Ordonez" taskNumber={4} />
          <Tasks tasks={fakeData.tasks} />
        </Route>
        <Route path="/users/:userId/edit">
          <UserInfo name="Angela Ordonez" taskNumber={4} />
          <EditUser />
          <Tasks tasks={fakeData.tasks} />
        </Route>
        <Route path="/users/:userId/delete">
          <UserInfo />
          <div>Delete users</div>
        </Route>
        <Route path="/users/:userId/tasks/new">
          <NewTask />
          <UserInfo name="Angela Ordonez" taskNumber={4} />
          <Tasks tasks={fakeData.tasks} />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Users;
