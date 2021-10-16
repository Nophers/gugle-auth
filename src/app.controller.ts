/* eslint-disable prettier/prettier */
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard("google")) // guard
  async googleAuth(@Req() req) {
   // "hello world" => to remove red error
  }

  @Get("auth/google/callback") // get it from localhost, redirect to google-auth
  @UseGuards(AuthGuard("google"))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req)
  }
}
