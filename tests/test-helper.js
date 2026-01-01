import Application from 'dummy/app';
import config from 'dummy/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

/* global require */
// Ensure tests are loaded
try {
  require('dummy/tests/unit/sanity-test');
} catch (e) {
  console.warn('Could not load sanity test', e);
}

start();
