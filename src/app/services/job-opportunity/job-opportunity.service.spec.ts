import { TestBed } from '@angular/core/testing';

import { JobOpportunityService } from './job-opportunity.service';

describe('JobOpportunityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobOpportunityService = TestBed.get(JobOpportunityService);
    expect(service).toBeTruthy();
  });
});
