import axios from 'axios';

export const fetchUsers = async () => {
  const { data } = await axios.get(
    'https://arcane-waters-37558.herokuapp.com/users',
  );
  return data;
};

export const fetchUser = async (key, userId) => {
  const { data } = await axios.get(
    `https://arcane-waters-37558.herokuapp.com/users/${userId}`,
  );
  return data;
};

export const fetchTasks = async (key, userId) => {
  const { data } = await axios.get(
    `https://arcane-waters-37558.herokuapp.com/users/${userId}/tasks`,
  );
  return data;
};

export const createUser = async (name) => {
  const { data } = await axios.post(
    `https://arcane-waters-37558.herokuapp.com/users/`,
    {
      name,
    },
  );
  return data;
};

export const createTask = async ({ taskName, userId }) => {
  const { data } = await axios.post(
    `https://arcane-waters-37558.herokuapp.com/users/${userId}/tasks`,
    {
      taskName,
    },
  );
  return data;
};
