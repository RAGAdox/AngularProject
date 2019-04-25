import { TestBed } from '@angular/core/testing';

import { GetDepertmentsService } from './get-depertments.service';

describe('GetDepertmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDepertmentsService = TestBed.get(GetDepertmentsService);
    expect(service).toBeTruthy();
  });
});
