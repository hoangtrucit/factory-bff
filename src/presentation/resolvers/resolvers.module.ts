import { Module } from '@nestjs/common';
import { UserResolver } from './user/user.resolver';
import { ServicesModule } from 'src/domain/services/services.module';

@Module({
  imports: [ServicesModule],
  providers: [UserResolver],
})
export class ResolversModule {}
