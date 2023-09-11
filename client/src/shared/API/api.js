import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

export const fetchUsers = async () => {
  const response = await axios.get(`/api/user`);
  return response.data;
};

export const addUser = async user => {
  console.log(user);
  return axios.post(`/api/user`, user);
};
