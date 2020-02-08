import { TestBed } from '@angular/core/testing';

import { GetFakeCommentsService } from './get-fake-comments.service';

describe('GetFakeCommentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFakeCommentsService = TestBed.get(GetFakeCommentsService);
    expect(service).toBeTruthy();
  });
});
