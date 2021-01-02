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
import { UserEntity } from './entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async getAll(): Promise<UserEntity[]> {
    return (await this.userService.findAll()).map(item=>new UserEntity(item.toJSON()));
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
  ) {
    return await this.userService.changeTypingSpeed(id, body);
  }

  @Patch(':id/logic-test')
  async changeLogicTest(
    @Param('id') id: string,
    @Body() body: ChangeUserLogicTestDto,
  ) {
    return await this.userService.changeLogicTest(id, body);
  }

  @Patch(':id/personality-test')
  async changePersonalityTest(
    @Param('id') id: string,
    @Body() body: ChangeUserPersonalityTestDto,
  ) {
    return await this.userService.changePersonalityTest(id, body);
  }

  @Patch(':id/video-ask')
  async changeVideoAsk(
    @Param('id') id: string,
    @Body() body: ChangeUserVideoAskDto,
  ) {
    return await this.userService.changeVideoAsk(id, body);
  }
}
