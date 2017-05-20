import { TestBed, inject } from '@angular/core/testing';
import { OrganizationService } from './organization.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabaseMock } from '../../mocks';

describe('Services.OrganizationService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrganizationService,
        { provide: AngularFireDatabase, useClass: AngularFireDatabaseMock },
        FirebaseApp,
      ],
    });
  });

  it('should be created',
    inject([OrganizationService], (service: OrganizationService) => {
      expect(service).toBeTruthy();
    }),
  );

  it('should return organizations',
    inject([OrganizationService], (service: OrganizationService) => {
      expect(service).toBeTruthy();
    }),
  );

});
