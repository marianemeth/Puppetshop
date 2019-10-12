import { TestBed } from '@angular/core/testing';

import { PuppetDataServiceService } from './puppet-data-service.service';

describe('PuppetDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PuppetDataServiceService = TestBed.get(PuppetDataServiceService);
    expect(service).toBeTruthy();
  });
});
