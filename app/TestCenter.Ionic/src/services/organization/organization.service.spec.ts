import { TestBed, inject } from '@angular/core/testing';
import { OrganizationService } from './organization.service';
import { ProvidersModule } from '../../providers/providers.module';
import { ServicesModule } from '../services.module';
import { AngularFire, AngularFireDatabase, AngularFireAuth } from 'angularfire2';
import { AngularFireMock, AngularFireDatabaseMock, AngularFireAuthMock } from '../../mocks';
import { FirebaseBackendService } from '../../providers';

describe('Services: OrganizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ProvidersModule, ServicesModule,
      ],
      providers: [
        OrganizationService, FirebaseBackendService,
        // { provide: AngularFireDatabase, useClass: AngularFireDatabaseMock },
        // { provide: AngularFireAuth, useClass: AngularFireAuthMock },
        { provide: AngularFire, useClass: AngularFireMock },
      ]
    });

  });

  it('should initialize',
    inject([OrganizationService], (service: OrganizationService) => {
      expect(service).toBeTruthy();
    }),
  );

  // it('should return list of organizations',
  //   inject([OrganizationService], (service: OrganizationService) => {
  //     spyOn(service.backend, 'getOrganizations').and.stub(); // (Promise.resolve([]));

  //     service.getOrganizations();

  //     expect(service.backend)
  //   }),
  // );

});
