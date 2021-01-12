import { Table, Model, CreatedAt, UpdatedAt, Column, DataType, Default } from 'sequelize-typescript';

@Table
export class PersonalityTest extends Model<PersonalityTest> {
  static readonly PROVIDE_NAME = 'PERSONALITY_TESTS_REPOSITORY';

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
  @Column
  answers: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
