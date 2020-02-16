import { TestBed } from '@angular/core/testing';

import { GetFirebaseDataService } from './get-firebase-data.service';

describe('GetFirebaseDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFirebaseDataService = TestBed.get(GetFirebaseDataService);
    expect(service).toBeTruthy();
  });
});
