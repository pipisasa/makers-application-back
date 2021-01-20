import { Body, ClassSerializerInterceptor, Controller, Get, Param, Patch, Post, UseInterceptors } from '@nestjs/common';
import { User } from '@app/db/user/user.entity';
import {
  ChangeUserDto,
  ChangeUserLogicTestDto,
  ChangeUserPersonalityTestDto,
  ChangeUserTypingSpeedDto,
  ChangeUserVideoAskDto,
  LoginUserDto,
} from './dto/user.dto';
import { UserService } from './user.service';
import { VideoaskResponseDto } from './dto/videoaskData.dto';
// import { UserEntity } from './entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async getAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post('login')
  async login(
    @Body() body: LoginUserDto
  ):Promise<User> {
    console.log(body);
    return await this.userService.findOrCreate(body.email, body.google_uid);
  }

  @Patch(':id/contact-form')
  async changeContactData(
    @Param('id') id: string,
    @Body() body: ChangeUserDto,
  ):Promise<User> {
    return await this.userService.changeContactData(id, body);
  }

  @Patch(':id/typing-speed')
  async changeTypingSpeed(
    @Param('id') id: string,
    @Body() body: ChangeUserTypingSpeedDto,
  ): Promise<User>{
    return await this.userService.changeTypingSpeed(id, body);
  }

  @Patch(':id/logic-test')
  async changeLogicTest(
    @Param('id') id: string,
    @Body() {logic_test_data}: ChangeUserLogicTestDto,
  ): Promise<User>{
    return await this.userService.changeLogicTest(id, {logic_test_data});
  }

  @Patch(':id/personality-test')
  async changePersonalityTest(
    @Param('id') id: string,
    @Body() {personality_test_data}: ChangeUserPersonalityTestDto,
  ): Promise<User>{
    return await this.userService.changePersonalityTest(id, {personality_test_data});
  }

  @Patch(':id/video-ask')
  async changeVideoAsk(
    @Param('id') id: string,
    @Body() {video_ask_contact_id}: ChangeUserVideoAskDto,
  ): Promise<User>{
    console.log("VideoAsk: ", id, video_ask_contact_id);
    return await this.userService.changeVideoAsk(id, {video_ask_contact_id});
  }

  @Patch(':id/complete')
  async setCompleteUserForm(
    @Param('id') id: string,
  ): Promise<User>{
    return await this.userService.setCompleteForm(id);
  }

  @Post('/webhook')
  async hook(
    @Body() body: VideoaskResponseDto,
  ):Promise<void>{
    this.userService.saveVideoaskData(body);
  }
}
