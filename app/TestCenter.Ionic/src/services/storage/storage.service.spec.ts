// import { TestBed, inject } from '@angular/core/testing';
// // import { MockBackend, MockConnection } from '@angular/http/testing';
// import { StorageService } from './storage.service';
// // import { StorageMock } from './storage.service.mocks';

// describe('StorageService', () => {

//   let storage: StorageService = null;

//   // beforeEach(() => {
//   //   spyOn(StorageService, 'initStorage').and.returnValue(new StorageMock());
//   //   storage = new StorageService();
//   //   spyOn(storage['storage'], 'get').and.callThrough();
//   //   spyOn(storage['storage'], 'set').and.callThrough();
//   //   spyOn(storage['storage'], 'remove').and.callThrough();
//   // });

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [ StorageService ],
//     });

//     spyOn(storage['storage'], 'get').and.callThrough();
//     spyOn(storage['storage'], 'set').and.callThrough();
//     spyOn(storage['storage'], 'remove').and.callThrough();
//   });

//   it('initialises', () => {
//     expect(storage).not.toBeNull();
//   });

//   it('should initialize service', inject([StorageService], (service: StorageService) => {
//     expect(service).toBeTruthy();
//   }));

//   it('gets', () => {
//     storage.get('dave');
//     expect(storage['storage'].get).toHaveBeenCalledWith('dave');
//   });

//   it('sets', () => {
//     storage.set('dave', 'test');
//     expect(storage['storage'].set).toHaveBeenCalledWith('dave', 'test');
//   });

//   it('removes', () => {
//     storage.remove('dave');
//     expect(storage['storage'].remove).toHaveBeenCalledWith('dave');
//   });
// });
