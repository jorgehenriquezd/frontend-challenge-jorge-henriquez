import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { selectCountriesList, selectLoading } from 'src/app/state/selectors/holidays.selector';
import { loadCountries } from 'src/app/state/actions/holidays.actions';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  loading$: Observable<boolean> = new Observable()
  countries$: Observable<any> = new Observable()
  result: string = '';

  constructor(private store: Store<any>) {     
   } 
    
 
  ngOnInit() {
    this.loading$ = this.store.select(selectLoading) 
    this.countries$ = this.store.select(selectCountriesList)  
    this.store.dispatch(loadCountries());     
  }

  searchCountry(event: any) {
    this.result = event.target.value;
  }

}
