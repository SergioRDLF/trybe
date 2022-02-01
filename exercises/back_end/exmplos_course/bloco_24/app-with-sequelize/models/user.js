const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
  });

  return User;
};

module.exports = User;