const URL = "http://localhost:8000";

const endpoints = {
  users: {
    getAll: `${URL}/users`,
    login: `${URL}/users/token`,
    register: `${URL}/users/register-user`,
  },
  products: {},
  workers: {},
};

module.exports = endpoints;
