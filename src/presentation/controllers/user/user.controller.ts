import { Controller, Get, Inject } from '@nestjs/common';
import { I_USER_SERVICE } from 'src/domain/services/user/domain.service.user.interface';
import { UserService } from 'src/domain/services/user/domain.service.user.service';

@Controller('user')
export class UserController {
  constructor(@Inject(I_USER_SERVICE) private userService: UserService) {}

  @Get('/v1')
  async getUser() {
    return await this.userService.getUsers(null);
  }
}
