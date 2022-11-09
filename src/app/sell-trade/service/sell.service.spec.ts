import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { SellService } from './sell.service';

describe('SellService', () => {
  let service: SellService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
