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
