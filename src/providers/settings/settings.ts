import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class SettingsProvider {

  private theme: BehaviorSubject<String>;

  constructor() {
    this.theme = new BehaviorSubject('default-theme');
  }

  public setActiveTheme(val) { this.theme.next(val); console.debug(val); }
  public getActiveTheme = () => this.theme.asObservable();

}
