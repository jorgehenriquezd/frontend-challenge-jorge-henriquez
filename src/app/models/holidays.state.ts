import { Country } from "./country.model";
import { Holiday } from "./holiday.model";

export interface HolidaysState {
    loading: boolean,
    holidays: ReadonlyArray<Holiday>
    countries: ReadonlyArray<Country>
}