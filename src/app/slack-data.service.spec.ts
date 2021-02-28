import { TestBed } from '@angular/core/testing';

import { SlackDataService } from './slack-data.service';

describe('SlackDataService', () => {
  let service: SlackDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlackDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
