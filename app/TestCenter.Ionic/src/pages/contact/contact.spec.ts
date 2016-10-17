import { ContactPage } from './contact';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockNavController } from 'ionic-angular/util/mock-providers';
import { NavController } from 'ionic-angular';

describe('Page: ContactPage', () => {

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [ContactPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: NavController, useValue: mockNavController },
      ],
    });
    TestBed.compileComponents();
    done();
  });

  it('should load component', async(() => {
    const fixture = TestBed.createComponent(ContactPage);
    fixture.detectChanges();
    expect(fixture).toBeDefined();
  }));

  it('should have title defined', async(() => {
    const fixture = TestBed.createComponent(ContactPage);
    fixture.detectChanges();

    const debugElement = fixture.debugElement.query(By.css('ion-title'));
    const element = debugElement.nativeElement;

    expect(element.textContent).toEqual('Contacts');
  }));

});
