import { TestBed, inject } from '@angular/core/testing';
import { NavigationProvider } from './navigation';

describe('Providers.NavigationProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationProvider],
    });
  });

  it('should be created', inject([NavigationProvider], (service: NavigationProvider) => {
    expect(service).toBeTruthy();
  }));

});
