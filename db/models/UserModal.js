const Sequelize = require("sequelize");
const db = require("../config");

const { DataTypes } = Sequelize;

const UserModal = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

module.exports = UserModal;
