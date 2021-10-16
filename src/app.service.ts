/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if(!req.user) {
      return "This is not a user from Google"
    }
    return {
      message: "User Info from Google",
      user: req.user
    }
  }
}
