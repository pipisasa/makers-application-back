export type VideoaskResponseAnswerDto = {
  answer_id: string;
  media_duration: number;
  gif: string;
  media_id: string;
  media_url: string;
  question_id: string;
  share_id: string;
  share_url: string;
  thumbnail: string;
  type: string;
  created_at: string;
}

export type VideoaskResponseContactDto = {
  contact_id: string;
  thumbnail: string;
  status: string;
  answers: VideoaskResponseAnswerDto[];
  platform: string;
  share_id: string;
  share_url: string;
  created_at: string;
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

export type VideoaskResponseDto = {
  event_id: string;
  interaction_id: string;
  event_type: VideoaskResonseType;
  contact: VideoaskResponseContactDto;
}