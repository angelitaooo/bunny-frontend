# Description

This project is a TODO Web APP, that is built with React.js and uses hooks.

## Acceptance criteria

- [x] It must have a view to list the users.
- [x] It must have an option to update the users.
- [x] It must have an option to delete the users.
- [x] In the user's list, you must be able to select a single user and list its tasks
- [x] It must have an option to create tasks.
- [x] It must have an option to update tasks.

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

- [React](https://expressjs.com/)
- [React Router](https://github.com/typicode/lowdb): To handle the app Routing
- [Axios](https://github.com/axios/axios): To make requests from the browser
- [husky](https://www.npmjs.com/package/cors): To run prettier before committing the code.
- [Tailwind](https://www.npmjs.com/package/body-parser): Styles of the App
- [react-query](https://www.npmjs.com/package/body-parser): It is a hook to handle async requests

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
