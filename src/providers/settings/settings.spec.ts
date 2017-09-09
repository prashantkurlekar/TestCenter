import { TestBed, inject } from '@angular/core/testing';
import { SettingsProvider } from './settings';

describe('Providers.NavigationProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsProvider],
    });
  });

  it('should be created', inject([SettingsProvider], (service: SettingsProvider) => {
    expect(service).toBeTruthy();
  }));

});
