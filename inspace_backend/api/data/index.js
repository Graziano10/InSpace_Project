const fs = require("fs");
const path = require("path");

const db = JSON.parse(fs.readFileSync(path.join(__dirname, "./db.json")));

const users = db.users;

const Config = {
  SECRET_KEY: "ff2ad04841230757465d435cad37a2c0418db6ff",
};

const User = {
  users,
  login(email, password) {
    return this.users.find((u) => u.email == email && u.password == password);
  },
  getMe(userId) {
    return this.users.find(u.id == userId);
  },
};

module.exports = {
  Config,
  User,
};
