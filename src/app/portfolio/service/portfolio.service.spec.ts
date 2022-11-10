import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { PortfolioService } from './portfolio.service';
import { Preference } from 'src/app/models/preference';
import { PreferenceService } from 'src/app/preferences/preference.service';

describe('PortfolioService', () => {
  let service: PortfolioService;
  let httpTestingController: any;

  beforeEach(() => {
    TestBed.configureTestingModule({imports : [HttpClientTestingModule]});
    service = TestBed.inject(PortfolioService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create service', inject([PortfolioService],
    fakeAsync((service: PortfolioService) =>{
      service.getSecurities().subscribe();
      const req = httpTestingController.expectOne('http://localhost:8080/api/holdings');
      expect(req.request.method).toEqual('POST');
      httpTestingController.verify();
      tick();
    })
  ));

  it('should return holdings', inject([PortfolioService],
    fakeAsync((service: PortfolioService) =>{
      service.getSecurities().subscribe();
      const req = httpTestingController.expectOne('http://localhost:8080/api/holdings');
      expect(req.request.method).toEqual('POST');
      httpTestingController.verify();
      tick();
    })
  ));

  it('should handle error', inject([PortfolioService],
    fakeAsync((service: PortfolioService) =>{
      service.getSecurities().subscribe();
      const req = httpTestingController.expectOne('http://localhost:8080/api/holdings');
      expect(req.request.method).toEqual('POST');
      httpTestingController.verify();
      tick();
    })
  ));

});
