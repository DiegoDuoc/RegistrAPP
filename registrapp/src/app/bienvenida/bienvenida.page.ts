import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  constructor(private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async logout() {
    const alertLogout = await this.alertCtrl.create({
      header: 'Cerrar sesión',
      message: 'Estás seguro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Sí',
          handler: () => {
            this.router.navigate(['/login'])
          }
        }
      ]
    })
    await alertLogout.present();
  }
}
