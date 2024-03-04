import Person from '../../classes/shouty.js';
import { Given, When, Then } from '@cucumber/cucumber';
import { assertThat, is } from 'hamjest';

//Given(/^Lucy is located (\d+) meter?s from Sean$/, function (distance) {
// Given('Lucy is located {int} meter(s) from Sean', function (distance) {
//   this.lucy = new Person
//   this.sean = new Person
//   this.lucy.moveTo(distance)
// });

Given('{person} is located {int} meter(s) from Sean', function (lucy, distance) {
  this.lucy = new Person
  this.sean = new Person
  this.lucy.moveTo(distance)
});
       
When('Sean shouts {string}', function (message) {
  this.sean.shout(message)
  this.message = message
});
       
Then('Lucy hears Sean\'s message', function () {
  assertThat(this.lucy.messagesHeard(this.message), is([this.message]))
});