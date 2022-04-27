import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule]
    });
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
