import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create login page', () => {
    fixture = TestBed.createComponent(LoginPage);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should be return valid form', () => {
    component.email.setValue('yorch@gmail.com')
    component.password.setValue(123456)
    expect(component.form.valid).toBeTrue()
  });

  it('should be return invalid form', () => {
    component.email.setValue('yorch')
    component.password.setValue(123456)   
    expect(component.form.invalid).toBeTrue()
  });
});
