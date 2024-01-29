import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from './domain.service.user.interface';
import { UserUsecaseService } from 'src/domain/usecases/user/domain.usecase.user.service';
import { I_USER_USECASE } from 'src/domain/usecases/user/domain.usecase.user.interface';
import {
  CreateUserRequest,
  CreateUserResponse,
  GetUsersRequest,
  GetUsersResponse,
} from '@clv-factory/protobuf/dist/gRPC/generate/index.app.payment.user.service.v1';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(I_USER_USECASE)
    private userUsecaseService: UserUsecaseService,
  ) {
    //
  }

  async getUsers(payload: GetUsersRequest): Promise<GetUsersResponse> {
    return await this.userUsecaseService.getUsers(payload);
  }

  async createUser(payload: CreateUserRequest): Promise<CreateUserResponse> {
    return await this.userUsecaseService.createUser(payload);
  }
}
