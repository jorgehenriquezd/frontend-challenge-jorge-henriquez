import { Component, Input, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() backButton: string;
  
  constructor(
    private alertController: AlertController,
    private utils: UtilsService
    ) { }

  ngOnInit() {}



 async confirmLogout() {
   const alert = await this.alertController.create({   
     message: 'Are you sure you want to log out?',
     buttons: [
       {
         text: 'Cancel',
         role: 'cancel',
         cssClass: 'secondary',
         handler: () => {
           console.log('Confirm Cancel: blah');
         }
       }, {
         text: 'Confirm',
         handler: () => {
           localStorage.removeItem('user');
           this.utils.goTo('/login');
         }
       }
     ]
   });
 
   await alert.present();
 }
}
