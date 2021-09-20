import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AlertController} from '@ionic/angular';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  users=[]

  constructor(private router: Router, private alertCtrl: AlertController, private loginService: LoginService) { }

  ngOnInit() {
    this.users = this.loginService.getUsuarios();
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
