import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './utils/typeorm';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({ envFilePath: '.env.development' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost' /* 'database-1.c4ffj2rebimq.eu-central-1.rds.amazonaws.com' */,
      username: 'postgres',
      password: '123',
      database: 'blind-talk',
      synchronize: true,
      entities,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
