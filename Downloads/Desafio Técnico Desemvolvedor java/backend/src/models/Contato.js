module.exports = (sequelize) => {
  const { DataTypes } = require('sequelize');

  return sequelize.define('Contato', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: true
    },
    observacoes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
};