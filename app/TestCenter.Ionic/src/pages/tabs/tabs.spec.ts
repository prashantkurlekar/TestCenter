import { TabsPage } from './tabs';
import { async, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockNavController } from 'ionic-angular/util/mock-providers';
import { NavController } from 'ionic-angular';

describe('Page: TabsPage', () => {

    beforeEach((done) => {
        TestBed.configureTestingModule({
            declarations: [TabsPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {provide: NavController, useValue: mockNavController},
            ],
        });
        TestBed.compileComponents();
        done();
    });

    it('should load component', async(() => {
        const fixture = TestBed.createComponent(TabsPage);
        fixture.detectChanges();
        expect(fixture).toBeDefined();
    }));
});