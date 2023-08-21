module.exports = (sequelize, DataTypes) => {
  return sequelize.define("quote", {
    quote: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });
};
