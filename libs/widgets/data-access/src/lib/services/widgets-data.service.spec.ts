import { TestBed } from '@angular/core/testing';

import { WidgetsDataService } from './widgets-data.service';

describe('WidgetsDataService', () => {
  let service: WidgetsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
