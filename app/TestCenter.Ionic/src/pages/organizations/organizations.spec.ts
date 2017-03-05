import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrganizationsPage } from './organizations';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { NavParamsMock } from "../../mocks";

describe('Pages: OrganizationsPage', () => {
  let component: OrganizationsPage;
  let fixture: ComponentFixture<OrganizationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        NavController,
        { provide: NavParams, useClass: NavParamsMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display organization list', () => {
    expect(component).toBeTruthy();
  });

});
