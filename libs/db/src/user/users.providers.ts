import { User } from './user.entity';

export const usersProviders = [
  {
    provide: User.PROVIDE_NAME,
    useValue: User,
  },
];
