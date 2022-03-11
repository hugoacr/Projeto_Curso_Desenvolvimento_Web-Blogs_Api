module.exports = (sequelize) => {
  const PostsCategorie = sequelize.define('PostsCategorie', {},
    {
      // underscored: true,
      timestamps: false,
      tableName: 'BlogPosts',
    });

  PostsCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie,
    { foreignKey: 'postId', otherKey: 'categoryId', through: PostsCategorie, as: 'Categories' });

    models.Categorie.belongsToMany(models.BlogPost,
    { foreignKey: 'categoryId', otherKey: 'postId', through: PostsCategorie, as: 'BlogPosts' }); 
  };

  return PostsCategorie;
};