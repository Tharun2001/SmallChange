import { HttpClient } from '@angular/common/http';
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { TradeService } from './trade.service';

describe('TradeService', () => {
  let service: TradeService;
  let httpTestingController: any;
  let url: string = "http://localhost:8080/api/trades";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TradeService);
  });

  it('should create trade service', inject([TradeService],
    fakeAsync((service: TradeService) =>{
      service.getTrades().subscribe();
      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toEqual('POST');
      httpTestingController.verify();
      tick();
    })
  ));

  it('should get all trade transactions', inject([TradeService],
    fakeAsync((service: TradeService) =>{
      service.getTrades().subscribe();
      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toEqual('POST');
      httpTestingController.verify();
      tick();
    })
  ));
});
