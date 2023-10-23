import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
    name:'users'
})
export class User {
    
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Column({ unique: true }) // Hacer que 'username' sea una columna única
  username: string;

  @Column()
  password: string;

  @Column()
  @Column({ unique: true }) // Hacer que 'email' sea una columna única
  email: string;

  @Column()
  approved: boolean;

  @Column()
  connected: boolean;

  validatePassword(password:string):boolean{
    return this.password === password;
  }

  getInfoToken(){
    return{
        id:this.id,
        username: this.username,
        email: this.email
    }
  }
}
