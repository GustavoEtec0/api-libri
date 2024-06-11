import { Sequelize } from "sequelize";

const connect = new Sequelize("db_libri_api", "root", "", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
  timezone: "America/Sao_Paulo",
});

export default connect;
