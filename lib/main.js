import Ember              from 'ember';
import isolatedContainer  from './isolated-container';
import moduleFor          from './module-for';
import moduleForComponent from './module-for-component';
import test               from './test';
import testResolver       from './test-resolver';

Ember.testing = true;

function setResolver(resolver) {
  testResolver.set(resolver);
}

function globalize() {
  window.moduleFor = moduleFor;
  window.moduleForComponent = moduleForComponent;
  window.test = test;
  window.setResolver = setResolver;
}

export {
  globalize,
  moduleFor,
  moduleForComponent,
  test,
  setResolver
};

