import { Person } from '../../classes/shouty.js';
import { defineParameterType } from '@cucumber/cucumber';

defineParameterType({
  name: 'person',
  regexp: /Lucy|Sean|Larry/,
  transformer: function(name) {
    this.people = this.people || {}
    return this.people[name] = this.people[name] || new Person(name, this.network, 0)
  }
})