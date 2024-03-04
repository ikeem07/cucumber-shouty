import { Person, Network } from '../../classes/shouty.js';
import { Given, When, Then, Before } from '@cucumber/cucumber';
import { assertThat, is } from 'hamjest';

Before(function () {
  this.network = new Network()
  this.people = {}
});

//Given(/^Lucy is located (\d+) meter?s from Sean$/, function (distance) {
// Given('Lucy is located {int} meter(s) from Sean', function (distance) {
//   this.lucy = new Person
//   this.sean = new Person
//   this.lucy.moveTo(distance)
// });
 
Given('a person named {word}', function (name) {
  this.people[name] = new Person(this.network)
});
       
When('Sean shouts {string}', function (message) {
  this.people['Sean'].shout(message)
  this.messageFromSean = message
});
       
Then('Lucy should hear Sean\'s message', function () {
  assertThat(this.people['Lucy'].messagesHeard(this.messageFromSean), is([this.messageFromSean]))
});