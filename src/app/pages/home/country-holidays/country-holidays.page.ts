import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HolidaysService } from 'src/app/services/holidays.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-country-holidays',
  templateUrl: './country-holidays.page.html',
  styleUrls: ['./country-holidays.page.scss'],
})
export class CountryHolidaysPage implements OnInit {


  countryName: string;
  countryCode: string;
  loading: boolean;
  holidays = [];

  constructor(
    private actRoute: ActivatedRoute,
    private holidaysService: HolidaysService,
    private utils: UtilsService
  ) {
    this.countryCode = this.actRoute.snapshot.paramMap.get('code');
    this.countryName = this.actRoute.snapshot.paramMap.get('name');
  }

  ngOnInit() {
    this.getHolidaysList();
  }

  getHolidaysList() {
    this.loading = true;

    this.holidaysService.getHolidaysList(this.countryCode).subscribe(res => {

      this.holidays = res.holidays;
      this.loading = false;

    }, error => {
      this.loading = false;
      this.utils.presentToast(error, 2000, 'danger')
    })

  }

}
