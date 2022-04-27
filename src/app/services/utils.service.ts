import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    public router: Router,
    private toastController: ToastController   
    ) { }


  goTo(route: string) {
    this.router.navigateByUrl(route);
  }

  async presentToast(msg: string, duration: number, color: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration,
      color: color,
      position: 'middle'
    });
    toast.present();
  }

}
