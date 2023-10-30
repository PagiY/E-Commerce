import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUser() {
    console.log('Get User');
  }
}
