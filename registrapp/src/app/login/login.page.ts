import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  users=[]

  constructor(private router: Router, private alertCtrl: AlertController, private toastCtrl: ToastController, private loginService: LoginService) { }

  ngOnInit() {
  }

  async recPass(user: HTMLInputElement){
    let usuario = user.value;
    if(this.loginService.getUsuario(usuario)){
      const success = await this.toastCtrl.create({
        message: 'Se ha enviado un link a tu correo!',
        duration: 2500,
        color: 'success'
      });
      await success.present();
    }else if(usuario == ""){
      const missingData = await this.toastCtrl.create({
        message: 'Debes ingresar tu usuario de correo DuocUC!',
        duration: 2500,
        color: 'danger'
      });
      await missingData.present();
    }else{
      const wrongData = await this.toastCtrl.create({
        message: 'No se encuentra este usuario, intente nuevamente.',
        duration: 2500,
        color: 'danger'
      });
      await wrongData.present();
    }
  }

  async ingreso(user: HTMLInputElement, pass: HTMLInputElement){
    let usuario = user.value;
    let contraseña = pass.value;
    if(this.loginService.getUsuario(usuario) && this.loginService.getPassword(contraseña)){
      this.router.navigate(["/bienvenida"])
    }else if(usuario == "" || contraseña == ""){
      const missingData = await this.toastCtrl.create({
        message: 'Debe llenar ambos campos!',
        duration: 2500,
        color: 'danger'
      })
      await missingData.present();
    }
    else{
      const wrongData = await this.toastCtrl.create({
        message: 'Credenciales incorrectas. Por favor intente nuevamente.',
        duration: 2500,
        color: 'danger'
      })
      await wrongData.present();
    }
  }

  ionViewWillEnter() {
    this.users = this.loginService.getUsuarios();
  }

}
