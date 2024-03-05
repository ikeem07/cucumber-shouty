import { Person, Network } from '../../classes/shouty.js';
import { Given, When, Then, Before } from '@cucumber/cucumber';
import { assertThat, contains, not } from 'hamjest';

Before(function () {
  this.people = {}
});

//Given(/^Lucy is located (\d+) meter?s from Sean$/, function (distance) {
// Given('Lucy is located {int} meter(s) from Sean', function (distance) {
//   this.lucy = new Person
//   this.sean = new Person
//   this.lucy.moveTo(distance)
// });

Given('the range is {int}', function (range) {
  this.network = new Network(range)
})
 
// Given('a person named {word}', function (name) {
//   this.people[name] = new Person(this.network)
// })

Given('a person named {word} is located at {int}', function (name, location) {
  this.people[name] = new Person(this.network, location)
})
       
When('Sean shouts {string}', function (message) {
  this.people['Sean'].shout(message)
  this.messageFromSean = message
});
       
Then('Lucy should hear Sean\'s message', function () {
  assertThat(this.people['Lucy'].messagesHeard(this.messageFromSean), contains(this.messageFromSean))
});

Then('Larry should not hear Sean\'s message', function () {
  assertThat(this.people['Larry'].messagesHeard(this.messageFromSean), not(contains(this.messageFromSean)))
});