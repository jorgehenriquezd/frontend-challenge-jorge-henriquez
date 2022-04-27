import { createAction, props } from '@ngrx/store';
import { Country } from 'src/app/models/country.model';
import { Holiday } from '../../models/holiday.model';


export const loadCountries = createAction(
    '[Home Page] Load countries',
  );
  
  export const loadedCountries = createAction(
    '[Home Page] Loaded success',
    props<{ countries: Country[] }>()
  )

export const loadHolidays = createAction(
    '[Country Holidays Page] Load holidays',
     (country: Country) => country
);

export const loadedHolidays = createAction(
    '[Country Holidays Page] Loaded success',
    props<{ holidays: Holiday[] }>()
)

