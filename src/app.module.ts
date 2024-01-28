import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import rootConfiguration from './infrastructure/configuration';
import { GraphModule } from './infrastructure/graphql/graphql.module';
import { ResolversModule } from './presentation/resolvers/resolvers.module';
import { ControllersModule } from './presentation/controllers/controllers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [join(process.cwd(), 'env', `.env`)],
      load: [rootConfiguration],
    }),
    GraphModule,
    ResolversModule,
    ControllersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
