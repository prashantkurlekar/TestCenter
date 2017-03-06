import { TestBed, inject } from '@angular/core/testing';
import { FirebaseBackendService } from './firebase-backend.service';
import { Organization } from '../../models/organization';
import { AngularFire, FirebaseUrl, AngularFireDatabase } from 'angularfire2';
import { AngularFireMock, AngularFireDatabaseMock } from '../../mocks';

describe('Providers: FirebaseBackendService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FirebaseBackendService,
        AngularFireDatabase,
        { provide: AngularFire, useClass: AngularFireMock },
      ],
      imports: []
    });
  });

  it('should initialize',
    inject([FirebaseBackendService], (service: FirebaseBackendService) => {
      expect(service).toBeTruthy();
    })
  );

  // it('should save organization',
  //   inject([FirebaseBackendService], (service: FirebaseBackendService) => {
  //     spyOn(service.organizations, 'push');
  //     const organization = new Organization('UT Organization');

  //     service.addOrganization(organization).then(() => {
  //       expect(service.organizations.push).toHaveBeenCalledWith(organization);
  //     });
  //   })
  // );

});
