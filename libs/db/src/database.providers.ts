import { Sequelize } from 'sequelize-typescript';
import configuration from 'libs/config/src/index';
import { User } from './user/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      console.log("DATABASE_URI", process.env.DATABASE_URL);

      const sequelize = new Sequelize(process.env.DATABASE_URL || configuration().db.postgres.uri, {
        logging: false,
      });
      sequelize.addModels([User]);
      await sequelize.sync({ force: !true });
      return sequelize;
    },
  },
];
