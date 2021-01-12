import { Table, Model, CreatedAt, UpdatedAt, Column, DataType } from 'sequelize-typescript';

@Table
export class TypingTest extends Model<TypingTest> {
  static readonly PROVIDE_NAME = 'TYPING_TESTS_REPOSITORY';

  @Column(DataType.STRING(1023))
  data: string;

  @Column({type: DataType.ENUM('en', 'ru')})
  lang: string

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
