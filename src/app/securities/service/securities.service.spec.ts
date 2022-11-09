import { TestBed } from '@angular/core/testing';

import { SecuritiesService } from './securities.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'
describe('SecuritiesService', () => {
  let service: SecuritiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SecuritiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
