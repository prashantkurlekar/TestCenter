import { TestBed, inject } from '@angular/core/testing';
import { StorageService } from './storage.service';
// import { StorageMock } from './storage.service.mocks';
import { Storage }    from '@ionic/storage';

describe('StorageService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService, Storage,
      ],
    });
  });

  it('should initialize', inject([StorageService, Storage], (storageService: StorageService) => {
    expect(storageService).toBeTruthy();
  }));

  // it('should get value by key', inject([StorageService, Storage], (storageService: StorageService) => {
  //   spyOn(StorageService, 'get').and.callThrough();

  //   storageService.get('storageKey');

  //   expect(storageService.get).toHaveBeenCalledWith('storageKey');
  // }));

  // it('sets', () => {
  //   storage.set('dave', 'test');
  //   expect(storage['storage'].set).toHaveBeenCalledWith('dave', 'test');
  // });

  // it('removes', () => {
  //   storage.remove('dave');
  //   expect(storage['storage'].remove).toHaveBeenCalledWith('dave');
  // });

});
