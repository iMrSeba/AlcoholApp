import { User } from './../../entities/user.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Delete()
  async removeAll(){
    return await this.usersService.removeAll();
  }
  @Post()
  async create(@Body() createUserDto: CreateUserDto){
    return await this.usersService.create(createUserDto);
  }
  @Get('profile')
  async getProfile(@Req() request) {
    // Obtiene el usuario autenticado de la solicitud
    const user = request['user'];
    return await this.usersService.findOne(user);
  }
  @Post('Person')
  async findOne(@Body() createUserDto: CreateUserDto) {
    const user = createUserDto;
    return await this.usersService.findOne(user.username);
  }
  @Post('Email')
  async findEmail(@Body() createUserDto: CreateUserDto) {
    const user = createUserDto;
    return await this.usersService.findEmail(user.email);
  }
  @Post('UploadPhoto')
  async uploadPhoto(@Body() UpdateUserDto: UpdateUserDto) {
    const user = UpdateUserDto;
    return await this.usersService.uploadPhoto(user.username,user.image);
  }

  @Post('updateUser')
  async updateUser(@Body() UpdateUserDto: UpdateUserDto) {
    const user = UpdateUserDto;
    return await this.usersService.updateUser(user.username,user.email,user.password,user.newUsername,user.image);
  }
}



