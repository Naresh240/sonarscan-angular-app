import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Initialize Angular testing environment
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Only run this block in Karma/Jest test context, not production builds
declare const require: any;

if (typeof require !== 'undefined') {
  // ✅ Load all spec files
  const contextSpecs = require.context('./', true, /\.spec\.ts$/);
  contextSpecs.keys().forEach(contextSpecs);

  // ✅ Also load all app source files (for coverage, even if untested)
  const contextSources = require.context('./app', true, /^\.\/.*\.ts$/);
  contextSources.keys().forEach(contextSources);
}
