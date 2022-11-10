import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { BuyService } from './buy.service';

describe('BuyService', () => {
  let service: BuyService;
  let httpTestingController: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(httpTestingController).toBeTruthy();
  });

  it('should buy a stock', inject([BuyService],
    fakeAsync((service: BuyService) =>{
      service.buyTrade(1, 1, 1).subscribe();
      const req = httpTestingController.expectOne('http://localhost:8080/api/trades/transaction');
      expect(req.request.method).toEqual('POST');
      // req.flush();
      httpTestingController.verify();
      tick();
    })
  ));
});
