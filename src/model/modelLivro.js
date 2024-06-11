import { Sequelize } from "sequelize";
import connect from "../database/database.js";

const modelLivro = connect.define("tbl_livro", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo_livro: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },

  autor_livro: {
    type: Sequelize.STRING(100),
    allowNull: true,
  },
  descricao_livro: {
    type: Sequelize.STRING(500),
    allowNull: true,
  },
});

modelLivro.sync({ force: true });

export default modelLivro;
