import { ActionReducerMap } from "@ngrx/store";
import { HolidaysState,  } from "../models/holidays.state";
import { holidaysReducer } from "./reducers/holidays.reducers";

export interface AppState {
  holidays: HolidaysState;
  countries: HolidaysState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {  
    holidays: holidaysReducer,
    countries: holidaysReducer
}