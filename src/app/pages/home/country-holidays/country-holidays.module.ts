import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryHolidaysPageRoutingModule } from './country-holidays-routing.module';

import { CountryHolidaysPage } from './country-holidays.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryHolidaysPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CountryHolidaysPage]
})
export class CountryHolidaysPageModule {}
