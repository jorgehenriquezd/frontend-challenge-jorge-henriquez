import { createSelector } from '@ngrx/store';

import { HolidaysState } from 'src/app/models/holidays.state';
import { AppState } from '../app.state';

export const selectCountriesFeature = (state: AppState) => state.countries;
export const selectHolidaysFeature = (state: AppState) => state.holidays;


export const selectCountriesList = createSelector(
  selectCountriesFeature,
  (state: HolidaysState) => state.countries
);

export const selectHolidaysList = createSelector(
  selectHolidaysFeature,
  (state: HolidaysState) => state.holidays
);

export const selectLoading = createSelector(
  selectHolidaysFeature,
  (state: HolidaysState) => state.loading
);