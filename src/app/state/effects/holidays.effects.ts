import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { HolidaysService } from 'src/app/services/holidays.service';
import { loadHolidays } from '../actions/holidays.actions';


@Injectable()
export class HolidaysEffect {


  loadCountries$ = createEffect(() => this.actions$.pipe(
    ofType('[Home Page] Load countries'),
    mergeMap(() => this.holidaysService.getCountries()
      .pipe(
        map(res => ({ type: '[Home Page] Loaded success', countries: res.countries })),
        catchError(() => EMPTY)
      ))
  )
  );

  loadHolidays$ = createEffect(() => this.actions$.pipe(
    ofType(loadHolidays), exhaustMap((country) =>
      this.holidaysService.getHolidaysList(country.code).pipe(
        map(res => ({ type: '[Country Holidays Page] Loaded success', holidays: res.holidays })),
        catchError(() => EMPTY)
      )
    ))

  );

  constructor(
    private actions$: Actions,
    private holidaysService: HolidaysService
  ) { }
}