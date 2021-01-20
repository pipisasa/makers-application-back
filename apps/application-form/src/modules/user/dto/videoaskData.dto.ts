import { IsDate, IsEmail, IsEnum, IsInt, IsNotEmpty, IsPhoneNumber, IsUrl, MaxLength, ValidateNested } from 'class-validator';

export class VideoaskResponseAnswerDto{
  @IsNotEmpty()
  answer_id: string;
  @IsInt()
  @IsNotEmpty()
  media_duration: number;
  @IsNotEmpty()
  @IsUrl()
  gif: string;
  @IsNotEmpty()
  media_id: string;
  @IsNotEmpty()
  @IsUrl()
  media_url: string;
  @IsNotEmpty()
  question_id: string;
  @IsNotEmpty()
  share_id: string;
  @IsNotEmpty()
  @IsUrl()
  share_url: string;
  @IsNotEmpty()
  @IsUrl()
  thumbnail: string;
  @IsNotEmpty()
  @IsEnum(['video'])
  type: string;
  @IsNotEmpty()
  @IsDate()
  created_at: string;
}

export class VideoaskResponseContactDto{
  @IsNotEmpty()
  contact_id: string;
  @IsNotEmpty()
  thumbnail: string;
  @IsNotEmpty()
  status: string;
  @IsNotEmpty()
  @ValidateNested()
  answers: VideoaskResponseAnswerDto[];
  @IsNotEmpty()
  platform: string;
  @IsNotEmpty()
  share_id: string;
  @IsNotEmpty()
  share_url: string;
  @IsNotEmpty()
  @IsDate()
  created_at: string;
  @IsNotEmpty()
  @IsDate()
  updated_at: string;
}

export enum VideoaskResonseType{
  formResponse = 'form_response',
  formResponseTranscribed = 'form_response_transcribed',
  formAuthorMessage = 'form_author_message',
  formContactMessage = 'form_contact_message',
  formContactTagged = 'form_contact_tagged',
  formContactUntagged = 'form_contact_untagged',
}

export class VideoaskResponseDto{
  @IsNotEmpty()
  event_id: string;
  @IsNotEmpty()
  interaction_id: string;
  @IsNotEmpty()
  event_type: VideoaskResonseType;
  @IsNotEmpty()
  @ValidateNested()
  contact: VideoaskResponseContactDto;
}