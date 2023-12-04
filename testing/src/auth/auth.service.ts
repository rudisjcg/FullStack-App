import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService,
        ) {}

    async login(loginDto: LoginDto): Promise<{token: string}> {
        const { email, password } = loginDto;
        const user = await this.userModel.findOne({email});
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        } 
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            throw new UnauthorizedException('Invalid password');
        }
        const payload = { sub: user.name, email: user.email };
        return {
            token: this.jwtService.sign(payload)
        }
    }

    async signUp(signUpDto: SignUpDto): Promise<{token: string}> {
        const { name, email, password } = signUpDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.userModel.create({
            name,
            email,
            password: hashedPassword
        });
        const token = this.jwtService.sign({ id: user._id });
        return {
            token
        };
    }
}
