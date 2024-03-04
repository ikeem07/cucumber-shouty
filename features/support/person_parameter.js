import { Person } from '../../classes/shouty.js';
import { defineParameterType } from '@cucumber/cucumber';

defineParameterType({
  name: 'person',
  regexp: /Lucy|Sean/,
  transformer: name => new Person(name)
})