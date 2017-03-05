import { TestBed, inject } from '@angular/core/testing';

import { OrganizationService } from './organization.service';

describe('Services: OrganizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationService]
    });
  });

  it('should initialize',
    inject([OrganizationService], (service: OrganizationService) => {
      expect(service).toBeTruthy();
    }),
  );

  it('should return list of orgnizations',
    inject([OrganizationService], (service: OrganizationService) => {
      service.getOrganizations().then((result) => {
        expect(result.length).toBeGreaterThanOrEqual(0);
      });
    }),
  );
});
