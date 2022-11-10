import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';

import { SecuritiesService } from './securities.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
describe('SecuritiesService', () => {
  let service: SecuritiesService;
  let httpTestingController: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SecuritiesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should return securities', inject([SecuritiesService],
    fakeAsync((service: SecuritiesService) =>{
      service.getSecurities().subscribe();
      const req = httpTestingController.expectOne('http://localhost:8080/api/securities');
      expect(req.request.method).toEqual('GET');
      httpTestingController.verify();
      tick();
    })
  ));

  it('should handle error if no securities', inject([SecuritiesService],
    fakeAsync((service: SecuritiesService) =>{
      service.getSecurities().subscribe();
      const req = httpTestingController.expectOne('http://localhost:8080/api/securities');
      expect(req.request.method).toEqual('GET');
      httpTestingController.verify();
      tick();
    })
  ));
});
