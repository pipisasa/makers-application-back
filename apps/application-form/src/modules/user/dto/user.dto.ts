import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsPhoneNumber, MaxLength } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  google_uid: string;
}

enum levelEnum {
  noob = 'noob',
  know_something = 'know_something',
  went_to_courses = 'went_to_courses'
};
enum studyingTimeEnum{
  evening = 'evening',
  morning = 'morning',
}

export class ChangeUserDto {
  @MaxLength(100)
  @IsNotEmpty()
  name: string;

  address: string;

  @IsPhoneNumber("kg")
  phone: string;

  telegram: string;

  birthday: string;
  
  @IsEnum(levelEnum)
  level: levelEnum;
  
  @MaxLength(255)
  description: string;
  
  @IsEnum(studyingTimeEnum)
  studying_time: studyingTimeEnum;
}

export class ChangeUserTypingSpeedDto {
  @IsInt()
  typing_speed: number;
  @IsInt()
  typing_missings: number;
}

export class TestItemDto {
  id: any;
  title: string;
  answers: Array<{
    id: string;
    title: string;
  }>
};

export class ChangeUserLogicTestDto {
  logic_test_data: TestItemDto[];
}

export class ChangeUserPersonalityTestDto {
  personality_test_data: TestItemDto[];
}

export class ChangeUserVideoAskDto {
  video_ask_contact_id: string;
}