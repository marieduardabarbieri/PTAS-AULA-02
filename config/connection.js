const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "postgres://mvmjomdk:BY20nv0LlbA7-7DfEHpXKP7k2cgtn6Vz@babar.db.elephantsql.com/mvmjomdk", {
  define: {
    timetamps: true,
    underscored: true,
  },
});

try {
  sequelize.authenticate();
  console.log('Conectado com o ElephantSQL!');
} catch (error) {
  console.error('Anteção, a conexão falhou!:', error);
}

module.exports = { Sequelize, sequelize };