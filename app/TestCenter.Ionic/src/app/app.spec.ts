import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { TestCenterApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

let component: TestCenterApp;
let fixture: ComponentFixture<TestCenterApp>;

describe('Component: TestCenterApp', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [TestCenterApp],
      providers: [],
      imports: [
        IonicModule.forRoot(TestCenterApp)
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCenterApp);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('is created', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('initializes with a root page of TabsPage', () => {
    expect(component['rootPage']).toBe(TabsPage);
  });

});
