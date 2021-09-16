import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private alertCtrl: AlertController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  ingresar(user, pass) {
    console.log(user.value, pass.value)
    this.router.navigate(['/bienvenida'])
  }

  async recPass() {
    const alert = await this.alertCtrl.create({
      header: 'Recuperación contraseña',
      message: 'Se ha enviado un link a su correo!',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async ingreso(user: HTMLInputElement, pass: HTMLInputElement){
    let name = "ped.gonzalezv";
    let contra = "pedgonv123";
    let usuario = user.value;
    let contraseña = pass.value;
    if(usuario == name && contraseña == contra){
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

}
