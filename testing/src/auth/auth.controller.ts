import { Controller, Body, HttpCode, Post, HttpStatus, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/schemas/user.schema';
import { AuthGuard } from './auth.guard';

@Controller('auth') 
export class AuthController {
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() user: User): Promise<any> {
        return await this.authService.signIn(user.email, user.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }
}
