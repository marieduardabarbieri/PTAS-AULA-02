const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "postgres://yxwstqqn:SJNvNiw1xTR-UY2P2VQbszSa7NN0geiu@silly.db.elephantsql.com/yxwstqqn", { //banco de dados "ptas-2" email mariaeduardaestudante
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