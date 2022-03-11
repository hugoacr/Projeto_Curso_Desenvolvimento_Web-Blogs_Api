module.exports = (sequelize) => {
  const PostsCategorie = sequelize.define('PostsCategorie', {},
    {
      underscored: true,
      timestamps: false,
      tableName: 'BlogPosts',
    });

  PostsCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie,
    { foreignKey: 'post_id', otherKey: 'category_id', through: PostsCategorie, as: 'Categories' });

    models.Categorie.belongsToMany(models.BlogPost,
    { foreignKey: 'category_id', otherKey: 'post_id', through: PostsCategorie, as: 'BlogPosts' }); 
  };

  return PostsCategorie;
};