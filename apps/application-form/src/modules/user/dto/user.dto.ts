import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsPhoneNumber, MaxLength, ValidateNested } from 'class-validator';

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
  @IsNotEmpty()
  typing_speed: number;
  @IsInt()
  @IsNotEmpty()
  typing_missings: number;
}


export class TestItemAnswerDto{
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  title: string;
}
export class TestItemDto {
  @IsNotEmpty()
  id: any;
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  @ValidateNested()
  answers: TestItemAnswerDto[]
};

export class ChangeUserLogicTestDto {
  @IsNotEmpty()
  @ValidateNested()
  logic_test_data: TestItemDto[];
}

export class ChangeUserPersonalityTestDto {
  @IsNotEmpty()
  @ValidateNested()
  personality_test_data: TestItemDto[];
}

export class ChangeUserVideoAskDto {
  @IsNotEmpty()
  video_ask_contact_id: string;
}