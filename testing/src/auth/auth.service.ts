import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
        ) {}

    async signIn(email: string, pass: string): Promise<any> {
        const user = await this.userService.findOne(email);
        if (user && user.password !== pass) {
            throw new UnauthorizedException('Invalid credentials');
        } 
        const payload = { sub: user.name, email: user.email };

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
