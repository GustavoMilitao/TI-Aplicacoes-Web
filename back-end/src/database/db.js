const data = {
  users: [],
};

function addUser({ name, email, password }) {
  data.users.push({ name, email, password });
}

function getUser(email) {
  const user = data.users.find((u) => u.email == email);
  return user;
}

module.exports = {
  addUser,
  getUser,
};