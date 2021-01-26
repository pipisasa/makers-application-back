import { Sequelize } from 'sequelize-typescript';
import configuration from 'libs/config/src/index';
import * as parseDbUrl from 'parse-database-url';
import { models } from './models.providers';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const dbConfig = parseDbUrl(configuration().db.postgres.uri);
      // const dbConfig = parseDbUrl(process.env.DATABASE_URL);
      console.log("DATABASE_URI", configuration().db.postgres.uri);

      const sequelize = new Sequelize(configuration().db.postgres.uri, {
        logging: false,
        dialectOptions: {
          // ssl: {
          //   require: true,
          //   rejectUnauthorized: false // <<<<<<< YOU NEED THIS
          // },
        },
        dialect:  'postgres',
        protocol: 'postgres',
        port: dbConfig.port,
        host: dbConfig.host,
      });
      // const sequelize = new Sequelize(dbConfig.database,dbConfig.user,dbConfig.password, {
      //   ssl: false,
      //   host: dbConfig.host,
      //   port: dbConfig.port,
      //   dialect: dbConfig.driver,
      //   logging: false,
      // });
      sequelize.addModels(models);
      await sequelize.sync({ force: !true });
      return sequelize;
    },
  },
];
