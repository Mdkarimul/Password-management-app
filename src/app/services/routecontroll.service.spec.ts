import { TestBed } from '@angular/core/testing';

import { RoutecontrollService } from './routecontroll.service';

describe('RoutecontrollService', () => {
  let service: RoutecontrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutecontrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
