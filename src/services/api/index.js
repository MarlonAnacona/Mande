const URL = "http://localhost:3000";

const endpoints = {
  clients: {
    getAll: `${URL}/cliente`,
  },
  users: {
    registerUser: `${URL}/users/register`,
    loginUser: `${URL}/users/login`,
  },
  products: {},
  workers: {},
};

module.exports = endpoints;
