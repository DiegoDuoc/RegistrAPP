import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private alertCtrl: AlertController) { }

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

}
