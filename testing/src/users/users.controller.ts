import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private UserService: UserService) {}

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.UserService.findAll();
    }

    @Post()
    async createUser(
        @Body()
        user: User,
    ): Promise<User> {
        return this.UserService.create(user);
    }

    @Get(':id')
    async getUser(
        @Param('id')
        id: string,
    ): Promise<User> {
        return this.UserService.findById(id);
    }

    @Put(':id')
    async updateUser(
        @Param('id')
        id: string,
        @Body()
        user: UpdateUserDto,
    ): Promise<User> {
        return this.UserService.updateById(id, user);
    }

    @Delete(':id')
    async deleteUser(
        @Param('id')
        id: string, 
    ): Promise<User> {
        return this.UserService.delete(id);
    }
}
