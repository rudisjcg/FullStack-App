import { Controller, Body, HttpCode, Post, HttpStatus, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth') 
export class AuthController {
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK) 
    @Get('/login')
    async signIn(@Body() loginDto: LoginDto): Promise<{ token: string}> {
        return await this.authService.login(loginDto);
    }

    @Post('/signup')
    signup(@Body() signUpDto: SignUpDto): Promise<{ token: string}> {
        return this.authService.signUp(signUpDto);
    }
    



    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }
}
