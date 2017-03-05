// var wallabyWebpack = require('wallaby-webpack');

// var webpackPostprocessor = wallabyWebpack({
//   entryPatterns: [
//     'src/wallabyTest.js',
//     'src/**/*spec.js'
//   ],

//   module: {
//     loaders: [
//       { test: /\.css$/, loader: 'raw-loader' },
//       { test: /\.html$/, loader: 'raw-loader' },
//       { test: /\.js$/, loader: 'angular2-template-loader', exclude: /node_modules/ },
//       { test: /\.json$/, loader: 'json-loader' },
//       { test: /\.styl$/, loaders: ['raw-loader', 'stylus-loader'] },
//       { test: /\.less$/, loaders: ['raw-loader', 'less-loader'] },
//       { test: /\.scss$|\.sass$/, loaders: ['raw-loader', 'sass-loader'] },
//       { test: /\.(jpg|png)$/, loader: 'url-loader?limit=128000' }
//     ]
//   }
// });

var compilerOptions = require('./src/tsconfig.spec.json').compilerOptions;

module.exports = function (wallaby) {

  return {
    files: [
      { pattern: 'src/**/*.ts', load: false },
      { pattern: 'src/**/*.d.ts', ignore: true },
      { pattern: 'src/**/*.css', load: false },
      { pattern: 'src/**/*.less', load: false },
      { pattern: 'src/**/*.scss', load: false },
      { pattern: 'src/**/*.sass', load: false },
      { pattern: 'src/**/*.html', load: false },
      { pattern: 'src/**/*spec.ts', ignore: true }
    ],

    tests: [
      { pattern: 'src/**/*spec.ts', load: false }
    ],

    testFramework: 'jasmine',

    compilers: {
      '**/*.ts': wallaby.compilers.typeScript(compilerOptions)
    },

    env: {
      kind: 'electron'
    },

    // postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    debug: true
  };
};

// module.exports = function (wallaby) {
//   return {
//     files: [
//       'src/**/*.ts'
//     ],
//     tests: [
//       'test/**/*spec.ts'
//     ],
//     testFramework: 'mocha'
//   };
// };

// module.exports = function (w) {
//   var wallabify = require('wallabify');
//   var wallabyPostprocessor = wallabify({
//     entryPatterns: [
//       'test/setup.js',
//       'app/**/*.spec.js'
//     ]
//   }
//   );

//   return {
//     debug: true,
//     files: [
//       { pattern: 'node_modules/es6-shim/es6-shim.js', instrument: false },
//       { pattern: 'node_modules/reflect-metadata/Reflect.js', instrument: false },
//       { pattern: 'node_modules/zone.js/dist/zone.js', instrument: false },
//       { pattern: 'node_modules/zone.js/dist/jasmine-patch.js', instrument: false },
//       { pattern: 'node_modules/zone.js/dist/async-test.js', instrument: false },
//       { pattern: 'node_modules/zone.js/dist/fake-async-test.js', instrument: false },
//       { pattern: 'app/**/*.html', load: false },
//       { pattern: 'app/**/*.ts', load: false },
//       { pattern: 'test/testUtils.ts', load: false },
//       { pattern: 'test/diExports.ts', load: false },
//       { pattern: 'test/mocks.ts', load: false },
//       { pattern: 'test/setup.ts', load: false },
//       { pattern: 'app/**/*.spec.ts', ignore: true }
//     ],
//     tests: [
//       { pattern: 'app/**/*.spec.ts', load: false }
//     ],
//     testFramework: 'jasmine',
//     middleware: function (app, express) {
//       app.use('/build', express.static(require('path').join(w.projectCacheDir, 'app')));
//     },
//     postprocessor: wallabyPostprocessor,
//     bootstrap: function (w) {
//       window.__moduleBundler.loadTests();
//     }
//   };
// };
