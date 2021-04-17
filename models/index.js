const User = require('./User');
const Post = require('./Post');
const Upload = require('./Upload');

User.hasMany(Post, {
    foreignKey: 'user_id',
});



Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

module.exports = { User, Post, Upload };

