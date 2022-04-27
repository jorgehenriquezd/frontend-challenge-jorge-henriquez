import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country.model';
import { loadHolidays } from 'src/app/state/actions/holidays.actions';
import { selectHolidaysList, selectLoading } from 'src/app/state/selectors/holidays.selector';
@Component({
  selector: 'app-country-holidays',
  templateUrl: './country-holidays.page.html',
  styleUrls: ['./country-holidays.page.scss'],
})
export class CountryHolidaysPage implements OnInit {


  country = {} as Country
  loading$: Observable<boolean> = new Observable()
  holidays$: Observable<any> = new Observable()

  constructor(
    private actRoute: ActivatedRoute,
    private store: Store<any>
  ) {
    this.country.code = this.actRoute.snapshot.paramMap.get('code');
    this.country.name = this.actRoute.snapshot.paramMap.get('name');
  }

  ngOnInit() {    
    this.holidays$ = this.store.select(selectHolidaysList)
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadHolidays(this.country));
  }

  

}
