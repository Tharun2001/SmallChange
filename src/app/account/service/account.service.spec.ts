import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { AccountService } from './account.service';

describe('AccountService', () => {
  let service: AccountService;
  let httpTestingController: any;
  let url = "http://localhost:8080/api";
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', inject([AccountService],
    fakeAsync((service: AccountService ) =>{
      service.getAccountDetails().subscribe();
      const req = httpTestingController.expectOne(url+"/accounts/getDetails");
      expect(req.request.method).toEqual('POST');
      httpTestingController.verify();
      tick();
    })
  ));

  it('should return Account Details', inject([AccountService],
    fakeAsync((service: AccountService ) =>{
      service.getAccountDetails().subscribe();
      const req = httpTestingController.expectOne(url+"/accounts/getDetails");
      expect(req.request.method).toEqual('POST');
      httpTestingController.verify();
      tick();
    })
  ));

  it('should return Bank Details', inject([AccountService],
    fakeAsync((service: AccountService ) =>{
      service.getAccountDetails().subscribe();
      const req = httpTestingController.expectOne(url+"/accounts/getDetails");
      expect(req.request.method).toEqual('POST');
      httpTestingController.verify();
      tick();
    })
  ));

  it('should add bank account', inject([AccountService],
    fakeAsync((service: AccountService ) =>{
      service.getAccountDetails().subscribe();
      const req = httpTestingController.expectOne(url+"/accounts/getDetails");
      expect(req.request.method).toEqual('POST');
      httpTestingController.verify();
      tick();
    })
  ));

  
  it('should delete bank account', inject([AccountService],
    fakeAsync((service: AccountService ) =>{
      service.getAccountDetails().subscribe();
      const req = httpTestingController.expectOne(url+"/accounts/getDetails");
      expect(req.request.method).toEqual('POST');
      httpTestingController.verify();
      tick();
    })
  ));

  it('should add funds to account', inject([AccountService],
    fakeAsync((service: AccountService ) =>{
      service.getAccountDetails().subscribe();
      const req = httpTestingController.expectOne(url+"/accounts/getDetails");
      expect(req.request.method).toEqual('POST');
      httpTestingController.verify();
      tick();
    })
  ));


  it('should withdraw funds from account', inject([AccountService],
    fakeAsync((service: AccountService ) =>{
      service.getAccountDetails().subscribe();
      const req = httpTestingController.expectOne(url+"/accounts/getDetails");
      expect(req.request.method).toEqual('POST');
      httpTestingController.verify();
      tick();
    })
  ));


});
