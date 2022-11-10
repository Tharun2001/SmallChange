import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { UserServiceService } from './user-service.service';
import { User } from '../models/user';

describe('UserServiceService', () => {
  let service: UserServiceService;
  let mockUser = {
    firstName: "Test",
    lastName: "User",
    dob: "2022-03-01",
    email: "test@test.com",
    phone: "123-456-7890",
    username: "Test",
    password: "Test123"
  };
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

  it('should return User', inject([UserServiceService],
    fakeAsync((service: UserServiceService) =>{
      let user: User;
      service.authenticateUser("Test", "Test123").subscribe();
      const req = httpTestingController.expectOne('http://localhost:8080/api/login');
      expect(req.request.method).toEqual('POST');
      req.flush(mockUser);
      httpTestingController.verify();
      tick();
      expect(localStorage.getItem('username')).toBeDefined();
    })
  ));

  it('should register User', inject([UserServiceService],
    fakeAsync((service: UserServiceService) =>{
      service.registerNewUser(mockUser).subscribe(
        data => console.log(data)
      );
      const req = httpTestingController.expectOne('http://localhost:8080/api/accounts');
      expect(req.request.method).toEqual('POST');
      req.flush(1);
      httpTestingController.verify();
      tick();
    })
  ));

  it('should clear local storage on logout', inject([UserServiceService],
    fakeAsync((service: UserServiceService) =>{
      service.authenticateUser("Test", "Test123").subscribe();
      //expect(localStorage.getItem('username')).toContain('Test');
      service.logout();
      expect(localStorage.getItem('username')).toBeNull();
    })
  ));

});
