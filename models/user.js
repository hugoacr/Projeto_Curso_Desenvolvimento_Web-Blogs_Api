const { DataTypes } = require('sequelize');

const Attributes = {
  displayName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    Attributes,
    {
      // underscored: true,
      timestamps: false,
      tableName: 'Users',
    },
  );

  return User;
};