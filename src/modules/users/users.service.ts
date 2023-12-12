import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import {Repository} from 'typeorm'
@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository:Repository<User> ){}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user)
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(username:string){
    const user = await this.userRepository.findOne({
      where:{
        username:username
      }
    });

    if(user){
      return user;
    }
    return null;
    
  }
  async findEmail(email:string){
    const user = await this.userRepository.findOne({
      where:{
        email:email
      }
    });

    if(user){
      return user;
    }
    return null;
    
  }

  async removeAll(){
    return await this.userRepository.clear();
  }

  async uploadPhoto(username:string,bytea:any){
    const user = await this.userRepository.findOne({
      where:{
        username:username
      }
    });
    user.image = bytea;
    return await this.userRepository.save(user);
  }

  async updateUser(updateUserDto:UpdateUserDto){
    const user = await this.userRepository.findOne({
      where:{
        username:updateUserDto.username
      }
    });
    user.username = updateUserDto.username;
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    return await this.userRepository.save(user);
  }
}
