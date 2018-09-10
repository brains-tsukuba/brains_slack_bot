'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    slackId: DataTypes.STRING,
    enrolledYear: DataTypes.INTEGER,
    latestMessageDate: DataTypes.DATE,
    disable: DataTypes.BOOLEAN
  }, {
    underscored: true,
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
