module.exports = (sequelize, _DataTypes) => {
  const PostsCategorie = sequelize.define('PostsCategorie', {},
    {
      // underscored: true,
      timestamps: false,
      tableName: 'PostsCategories',
    });

  PostsCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie,
    { foreignKey: 'postId', otherKey: 'categoryId', through: PostsCategorie, as: 'categories' });

    models.Categorie.belongsToMany(models.BlogPost,
    { foreignKey: 'categoryId', otherKey: 'postId', through: PostsCategorie, as: 'posts' }); 
  };

  return PostsCategorie;
};