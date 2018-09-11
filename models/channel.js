'use strict';
module.exports = (sequelize, DataTypes) => {
  const channel = sequelize.define('channel', {
    name: DataTypes.STRING,
    slackId: DataTypes.STRING
  }, {
    underscored: true,
  });
  channel.associate = function(models) {
    // associations can be defined here
  };
  return channel;
};