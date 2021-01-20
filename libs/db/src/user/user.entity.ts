import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  static readonly PROVIDE_NAME = 'USERS_REPOSITORY';

  @Column
  name: string;

  @Column({ unique: true, allowNull: false })
  email: string;

  @PrimaryKey
  @Column({ allowNull: false, unique: true, type: DataType.STRING })
  _id: string;

  @Column
  address: string;

  @Column
  phone: string;

  @Column
  telegram: string;

  @Column
  birthday: Date;

  @Column(DataType.ENUM('noob', 'know_something', 'went_to_courses'))
  level: string;

  @Column(DataType.ENUM('evening', 'morning'))
  studying_time: string;

  @Column
  description: string;

  @Column
  typing_speed: number;

  @Column
  typing_missings: number;

  @Column
  is_confirmed: boolean;

  @Column
  is_completed: boolean;

  @Column(DataType.JSON)
  logic_test_data: string;

  @Column
  logic_test_correct_answers: number;

  @Column(DataType.JSON)
  personality_test_data: string;

  @Column
  video_ask_contact_id: string;

  @Column(DataType.JSON)
  videoask_data: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
