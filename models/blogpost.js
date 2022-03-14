const { DataTypes } = require('sequelize');

const Attributes = {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  published: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated: {
    type: DataTypes.DATE,
    allowNull: true,
  },
};

module.exports = (sequelize) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    Attributes,
    {
      // underscored: true,
      timestamps: false,
      tableName: 'BlogPosts',
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return BlogPost;
};