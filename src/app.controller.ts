import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CustomPipe } from './custom.pipe';
import { CreateUserDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/test')
  test(@Body() createUserDto: CreateUserDto) {
    console.log('content', createUserDto);
  }
}
