'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      auto_increment: true
    },
    name: DataTypes.STRING
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
    Role.belongsToMany(models.User, {
      through: 'userRoles',
      foreignKey: 'roleid',
      otherKey: 'userid'
    });
  };
  return Role;
};