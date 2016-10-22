/* tslint:disable */

import './polyfills.ts';

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare var __karma__: any;
declare var require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = () => { };

Promise.all([
  System.import('@angular/core/testing'),
  System.import('@angular/platform-browser-dynamic/testing'),
])
  // First, initialize the Angular testing environment.
  .then(([testing, testingBrowser]) => {
    testing.getTestBed().initTestEnvironment(
      testingBrowser.BrowserDynamicTestingModule,
      testingBrowser.platformBrowserDynamicTesting()
    );
  })
  // Then we find all the tests.
  .then(() => require.context('./', true, /\.spec\.ts/))
  // And load the modules.
  .then(context => context.keys().map(context))
  // Finally, start Karma to run the tests.
  .then(__karma__.start, __karma__.error);

/* tslint:enable */

// /* tslint:disable */

// declare var __karma__: any;

// __karma__.loaded = () => { };

// import 'core-js/client/shim';
// import 'reflect-metadata';
// import 'zone.js/dist/zone';
// import 'zone.js/dist/long-stack-trace-zone';
// import 'zone.js/dist/async-test';
// import 'zone.js/dist/fake-async-test';
// import 'zone.js/dist/sync-test';
// import 'zone.js/dist/proxy';
// import 'zone.js/dist/jasmine-patch';

// import 'rxjs/Rx';

// import { TestBed } from '@angular/core/testing';
// import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// declare var require: any;
// // TestBed.initTestEnvironment(
// //     BrowserDynamicTestingModule,
// //     platformBrowserDynamicTesting()
// // );

// Promise.all([
//   System.import('@angular/core/testing'),
//   System.import('@angular/platform-browser-dynamic/testing'),
// ])
//   // First, initialize the Angular testing environment.
//   .then(([testing, testingBrowser]) => {
//     testing.getTestBed().initTestEnvironment(
//       testingBrowser.BrowserDynamicTestingModule,
//       testingBrowser.platformBrowserDynamicTesting()
//     );
//   })
//   // Then we find all the tests.
//   .then(() => require.context('./', true, /\.spec\.ts/))
//   // And load the modules.
//   .then(context => context.keys().map(context))
//   // Finally, start Karma to run the tests.
//   .then(__karma__.start, __karma__.error);

// // // toreplace
// // import '../src/pages/contact/contact.spec';
// // import '../src/pages/home/home.spec';
// // // toreplace

// __karma__.start();

// /* tslint:enable */
