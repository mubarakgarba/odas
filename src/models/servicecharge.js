'use strict';
module.exports = (sequelize, DataTypes) => {
  var ServiceCharge = sequelize.define('ServiceCharge', {
    service: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    charge: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
  }, {});
  ServiceCharge.associate = function(models) {
    const { Doctor, Appointment } = models;
    ServiceCharge.belongsTo(Doctor);
    ServiceCharge.hasOne(Appointment);
  };
  return ServiceCharge;
};