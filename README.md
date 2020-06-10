# Description

This project is a TODO Web APP, that is built with React.js and uses hooks.

## Acceptance criteria

- [x] It must have a view to list the users.

<img src="/images/allusers.png" width=600 />

- [x] It must have an option to update the users.

<img src="/images/edituser.png" width=600 />

- [x] It must have an option to delete the users.

<img src="/images/deleteuser.png" width=600 />

- [x] In the user's list, you must be able to select a single user and list its tasks

<img src="/images/singleuser.png" width=600 />

- [x] It must have an option to create tasks.

<img src="/images/newtask.png" width=600 />

- [x] It must have an option to update tasks.

<img src="/images/edittask.png" width=600 />

- [x] Creates a new user

<img src="/images/newuser.png" width=600 />

# Project Routes

| Action                  | Routes                     |
| ----------------------- | -------------------------- |
| Show all users          | `/users/`                  |
| User info and its tasks | `/users/:userId`           |
| Create new user         | `/users/new`               |
| Edit user               | `/users/:userId/edit`      |
| Delete user             | `/users/:userId/delete`    |
| Create new task         | `/users/:userId/tasks/new` |

# Dependencies

- [React](https://es.reactjs.org/)
- [React Router](https://reacttraining.com/react-router/): To handle the app Routing
- [Axios](https://github.com/axios/axios): To make requests from the browser
- [husky](https://www.npmjs.com/package/husky): To run prettier before committing the code.
- [Tailwind](https://tailwindui.com/): Styles of the App
- [react-query](https://github.com/tannerlinsley/react-query): It is a hook to handle async requests

# Project Diagram

<img src="/images/diagram.png" width=600 />

# Run project locally

Install the project
`npm install`

Run server
`npm start`

# Deploy

I used [Now](https://devcenter.heroku.com/) to deploy the App.
You can find the production App in this address [https://arcane-waters-37558.herokuapp.com/users/](https://arcane-waters-37558.herokuapp.com/users/).

## Steps I followed to deploy

1. Create an account in Now

<!-- loom
Ver todos los usuarios, creando un usuario, actualizandlo y creando una tarea para ese usuario -->

# What would I have done if I had more time

- [ ] Error validation/handling
- [ ] DRY some code, specially in these files:
  - https://github.com/angelitaooo/bunny-frontend/blob/44f5d9f49a9d6285dd6329d2c6dff326ee111f0d/src/components/EditUser.js#L33-L61
  - https://github.com/angelitaooo/bunny-frontend/blob/44f5d9f49a9d6285dd6329d2c6dff326ee111f0d/src/components/NewTask.js#L32-L61
  - https://github.com/angelitaooo/bunny-frontend/blob/44f5d9f49a9d6285dd6329d2c6dff326ee111f0d/src/components/NewUser.js#L32-L60
