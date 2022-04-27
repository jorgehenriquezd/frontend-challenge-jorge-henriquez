import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from "@angular/router/testing";
import { CountryHolidaysPage } from './country-holidays.page';
import { provideMockStore } from '@ngrx/store/testing';
describe('CountryHolidaysPage', () => {
  let component: CountryHolidaysPage;
  let fixture: ComponentFixture<CountryHolidaysPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryHolidaysPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule],
      providers: [provideMockStore({}) ]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryHolidaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

 
});
