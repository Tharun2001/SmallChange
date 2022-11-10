import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { Preference } from '../models/preference';

import { PreferenceService } from './preference.service';

describe('PreferenceService', () => {
  let mockPreferences : Preference=
    {"username": 'Test1', "risk": 5, "purpose": "Testing", "incomeCategory": "150,000+", "lengthOfInvestment": "15+ years"};
  let httpTestingController: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should return preference', inject([PreferenceService],
    fakeAsync((service: PreferenceService) =>{
      let preference: Preference;
      service.getPreference().subscribe();
      const req = httpTestingController.expectOne('http://localhost:8080/api/preference');
      expect(req.request.method).toEqual('POST');
      req.flush(mockPreferences);
      httpTestingController.verify();
      tick();
    })
  ));

  it('should set preference', inject([PreferenceService],
    fakeAsync((service: PreferenceService) =>{
      let cars: Preference;
      service.setPreference(mockPreferences).subscribe(data => {
        console.log(data);
      });
      const req = httpTestingController.expectOne('http://localhost:8080/api/preference');
      expect(req.request.method).toEqual('POST');
      httpTestingController.verify();
      tick();
    })
  ));
});
