import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { BuyService } from './buy.service';

describe('BuyService', () => {
  let service: BuyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BuyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
