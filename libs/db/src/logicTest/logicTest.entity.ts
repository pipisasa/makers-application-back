import { Table, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class LogicTest extends Model<LogicTest> {
  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
