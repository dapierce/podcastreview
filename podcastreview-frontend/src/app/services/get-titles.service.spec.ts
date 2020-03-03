Learn more or give us feedback
import { TestBed } from '@angular/core/testing';

import { GetTitlesService } from './podcast.service';

describe('GetTitlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTitlesService = TestBed.get(GetTitlesService);
    expect(service).toBeTruthy();
  });
});