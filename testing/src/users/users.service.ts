import { Injectable, NotFoundException } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor (
        @InjectModel(User.name) 
        private userModel: mongoose.Model<User>
    ) {}


    async findAll(): Promise<User[]> {
        const users = await this.userModel.find();
        return users;
    }

    async create(user: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

    async findById(id: string): Promise<User> {
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        } else {
            return user;
        }

    }

    async findOne(email: string): Promise<User | undefined> {
        return await this.userModel.findOne({ email }).exec();
    }

    async updateById(id: string, user: UpdateUserDto): Promise<User> {
       return await this.userModel.findByIdAndUpdate(id, user, { new: true });
    }

    async delete(id: string): Promise<User> {
        return await this.userModel.findByIdAndDelete(id);
    }
}
