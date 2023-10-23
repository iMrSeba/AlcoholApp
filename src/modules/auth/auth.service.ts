import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { UserLoginDto } from './dto/user-login.dto';

@Injectable()
export class AuthService {

    constructor(
        private UsersService:UsersService,
        private jwtService:JwtService
    ){}

    async login(userLoginDto: UserLoginDto){
        const user = await this.UsersService.findOne(userLoginDto.username);

        if(!user) return null;

        if(user.password != userLoginDto.password && user.username == userLoginDto.username){
            return 12;
        }

        if(!user.validatePassword(userLoginDto.password)) return null;

        const payload = user.getInfoToken();

        const token = this.jwtService.sign(payload);

        return{
            token:token,
            user: user
        }
    }
}
