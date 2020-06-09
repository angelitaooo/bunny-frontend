import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './Layout';
import Users from './Users';
import AllUsersNavigation from './AllUsersNavigation';
import UserDetailNavigation from './UserDetailNavigation';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Redirect from="/" to="/users" exact />
        <Route path="/users" exact>
          <AllUsersNavigation />
        </Route>
        <Route
          path="/users/:userId"
          children={({ match }) =>
            match.params.userId === 'new' ? (
              <AllUsersNavigation />
            ) : (
              <UserDetailNavigation />
            )
          }
        ></Route>
      </Switch>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <Switch>
              <Route path="/users">
                <Users />
              </Route>
            </Switch>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default App;
