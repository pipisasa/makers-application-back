import { Table, Model, CreatedAt, UpdatedAt, Column, DataType, PrimaryKey, Default } from 'sequelize-typescript';

@Table
export class LogicTest extends Model<LogicTest> {
  static readonly PROVIDE_NAME = 'LOGIC_TESTS_REPOSITORY';

  @Default('radio')
  @Column({ allowNull: true, type: DataType.ENUM('radio', 'checkbox', 'range') })
  answer_type: string;

  @Column(DataType.JSONB)
  img: string;
  
  @Column({ allowNull: false })
  title: string;

  @Column
  description: string;

  @Column({ allowNull: false })
  answers: string;

  @Column({ allowNull: false })
  correct_answers: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}