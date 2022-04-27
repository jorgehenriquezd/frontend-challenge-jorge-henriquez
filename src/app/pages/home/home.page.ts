import { Component, OnInit } from '@angular/core';
import { HolidaysService } from 'src/app/services/holidays.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  loading: boolean;
  countries = [];
  result: string = '';

  constructor(
    public holidaysService: HolidaysService,
    public utils: UtilsService
    ) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.loading = true;

    this.holidaysService.getCountries().subscribe(res => {
      this.countries = res.countries;
      this.loading = false;
    }, error => {
      this.loading = false;
      this.utils.presentToast(error, 2000, 'danger')
    })    
  }

  
  searchCountry(event) {    
    this.result = event.target.value;
  }

}
