import { TestBed, ComponentFixture } from '@angular/core/testing';
import { OrganizationsPage } from './organizations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Page.Admin.Organizations', () => {

  let component: OrganizationsPage;
  let fixture: ComponentFixture<OrganizationsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be initialize', () => {
    expect(component).toBeTruthy();
  });

});
