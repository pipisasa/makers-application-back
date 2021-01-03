import { Sequelize } from 'sequelize-typescript';
import configuration from 'libs/config/src/index';
import { User } from './user/user.entity';
import * as parseDbUrl from 'parse-database-url';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const dbConfig = parseDbUrl('postgres://sizufkfijeumaz:a3f6da68daaaa8cc5109bfbd423ff21e7373ccab565fc38e62f1e64dafce56f2@ec2-3-215-40-176.compute-1.amazonaws.com:5432/ddfa3qgp8gjdgt');
      // const dbConfig = parseDbUrl(process.env.DATABASE_URL);
      console.log("DATABASE_URI", process.env.DATABASE_URL, dbConfig);

      // const sequelize = new Sequelize(process.env.DATABASE_URL || configuration().db.postgres.uri, {
      //   logging: false,
      // });
      const sequelize = new Sequelize(dbConfig.database,dbConfig.user,dbConfig.password, {
        host: dbConfig.host,
        port: dbConfig.port,
        dialect: dbConfig.driver,
        logging: false,
      });
      sequelize.addModels([User]);
      await sequelize.sync({ force: !true });
      return sequelize;
    },
  },
];
