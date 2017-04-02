// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { TestPage } from './test';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { NavController, Platform } from 'ionic-angular';
// import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Logger } from '../../../providers';
// import { Http, BaseRequestOptions } from '@angular/http';
// import { MockBackend } from '@angular/http/testing';
// import { PlatformMock } from '../../../mocks';
// import { TestService } from '../../../services';

// describe('Page: Creator.Test', () => {
//   let component: TestPage;
//   let fixture: ComponentFixture<TestPage>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [TestPage],
//       imports: [FormsModule, ReactiveFormsModule],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       providers: [
//         NavController, FormBuilder,
//         { provide: Platform, useClass: PlatformMock },
//         MockBackend, BaseRequestOptions,
//         {
//           provide: Http, useFactory: (mockBackend: MockBackend, options: BaseRequestOptions) => {
//             return new Http(mockBackend, options);
//           }, deps: [MockBackend, BaseRequestOptions],
//         },
//         Logger, TestService,
//       ],
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TestPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should trackView in Google Analytics', async(() => {
//     spyOn(component.logger, 'trackView').and.stub();

//     component.ionViewDidEnter();

//     expect(component.logger.trackView).toHaveBeenCalledWith(component.title);
//   }));

//   it('should validate test name', () => {
//     let errors: any = {};
//     let name: any = component.testForm.controls['name'];

//     name.setValue('');
//     errors = name.errors || {};
//     expect(errors['required']).toBeTruthy();

//     name.setValue('012345678901234567');
//     errors = name.errors || {};
//     expect(errors['maxlength']).toBeTruthy();
//   });

//   it('should validate test description', () => {
//     let errors: any = {};
//     let description: any = component.testForm.controls['description'];

//     description.setValue('');
//     errors = description.errors || {};
//     expect(errors['required']).toBeTruthy();

//     description.setValue('012345678901234567890123456789012345678901234567890123456789012345678901234567890');
//     errors = description.errors || {};
//     expect(errors['maxlength']).toBeTruthy();
//   });

// });
