import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomePage } from './home';
import { IonicModule } from 'ionic-angular';

describe('Page.HomePage', () => {
  let de: DebugElement;
  let comp: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage),
      ],
      providers: [],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
    // de = fixture.debugElement.query(By.css('h3'));
  });

  it('should create component', () => expect(comp).toBeDefined());

});
