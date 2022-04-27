import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  constructor(private http: HttpClient) { }


  getCountries() {
    return this.http.post<any>(
      environment.baseUrl + environment.countries, {},
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': environment.apiKey
        }
      });
  }

  getHolidaysList(countryCode: string) {
    let currentYear = new Date().getFullYear()

    return this.http.post<any>(
      environment.baseUrl + environment.list, {
      "country_code": countryCode,
      "year": currentYear
    },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': environment.apiKey
        }
      });
  }


}

