import { createReducer, on } from '@ngrx/store';
import { HolidaysState } from 'src/app/models/holidays.state';

import { loadCountries, loadedCountries, loadedHolidays, loadHolidays } from '../actions/holidays.actions';

export const initialState: HolidaysState = { loading: false, countries: [], holidays: [] }


export const holidaysReducer = createReducer(
    initialState,
    on(loadCountries, (state) => {
        return {...state, loading: true}
    }),
    on(loadedCountries, (state, {countries}) => {
        return {...state, loading: false, countries }
    }),
    on(loadHolidays, (state) => {
        return {...state, loading: true}
    }),
    on(loadedHolidays, (state, {holidays}) => {
        return {...state, loading: false, holidays }
    }),
);