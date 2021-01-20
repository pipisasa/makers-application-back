// import { Exclude } from 'class-transformer';

export class UserEntity{
  _id: string;
  name: string;
  email: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}