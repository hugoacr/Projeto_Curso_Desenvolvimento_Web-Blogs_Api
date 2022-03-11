const { DataTypes } = require('sequelize');

const Attributes = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const Categorie = sequelize.define( 
    'Categorie',
    Attributes,
    {
      // underscored: true,
      timestamps: false,
      tableName: 'Categories',
    },
);
  return Categorie;
};