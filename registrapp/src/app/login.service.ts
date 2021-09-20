import { Injectable } from '@angular/core';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usuario: Login[] = [{
    usuario : "ped.gonzalezv",
    password : "pedgonv123"
  }]

  constructor() { }

  getUsuarios(){return this.usuario}
  getUsuario(name : string){return this.usuario.find(x=>{return x.usuario == name})}
  getPassword(pass : string){return this.usuario.find(x=>{return x.password == pass})}
}
