// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
               basePath: '',
               frameworks: ['jasmine', '@angular-devkit/build-angular'],
               plugins: [
                 require('karma-jasmine'),
                 require('karma-chrome-launcher'),
                 require('karma-jasmine-html-reporter'),
                 require('karma-coverage-istanbul-reporter'),
                 require('karma-notify-reporter'),
                 require('@angular-devkit/build-angular/plugins/karma')
               ],
               client: {
                 clearContext: false // leave Jasmine Spec Runner output visible in browser
               },
               coverageIstanbulReporter: {
                 dir: require('path').join(__dirname, '../coverage'),
                 reports: ['html', 'lcovonly', 'text-summary'],
                 fixWebpackSourcePaths: true
               },
               reporters: ['progress', 'kjhtml', 'notify'],
               port: 9876,
               colors: true,
               logLevel: config.LOG_INFO,
               autoWatch: true,
               browsers: ['Chrome'],
               singleRun: false,
               notifyReporter: {
                 reportEachFailure: true, // Default: false, Will notify on every failed spec
                 // reportSuccess: false, // Default: true, Will notify when a suite was successful
                 reportBackToSuccess: false, // Default: true, Will notify when a suite was back to successful
               }
             });
};
