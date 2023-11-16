import { Module,  } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import {MongooseModule, getModelToken} from '@nestjs/mongoose';
import {  User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UserService, {
    provide: getModelToken(User.name),
    useValue: UsersModule,
  }],
  exports: [UserService]
})
export class UsersModule {}
