import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { SellService } from './sell.service';

describe('SellService', () => {
  let service: SellService;
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

  it('should sell a stock', inject([SellService],
    fakeAsync((service: SellService) =>{
      service.sellTrades(1, 1, 1).subscribe();
      const req = httpTestingController.expectOne('http://localhost:8080/api/trades/transaction');
      expect(req.request.method).toEqual('POST');
      // req.flush();
      httpTestingController.verify();
      tick();
    })
  ));
});
