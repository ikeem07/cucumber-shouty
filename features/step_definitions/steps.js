import { Person, Network } from '../../classes/shouty.js';
import { Given, When, Then, Before } from '@cucumber/cucumber';
import { assertThat, contains, not, is } from 'hamjest';
import assert from 'assert';

const default_range = 100

Before(function () {
  this.people = {}
  this.network = new Network(default_range)
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
 
Given('a person named {word}', function (name) {
  this.people[name] = new Person(this.network, 0)
})

Given('people are located at', function (dataTable) {
  dataTable.transpose().hashes().map((person) => {
    this.people[person.name] = new Person(this.network, person.location)
  })
});

When('Sean shouts', function () {
  this.people['Sean'].shout('Hello, world')
})
       
When('Sean shouts {string}', function (message) {
  this.people['Sean'].shout(message)
  this.messageFromSean = message
});

When('Sean shouts the following message', function (message) {
  this.people['Sean'].shout(message)
  this.messageFromSean = message
})

Then('Lucy should hear a shout', function () {
  assertThat(this.people['Lucy'].messagesHeard().length, is(1))
});
       
Then('Lucy should hear Sean\'s message', function () {
  assertThat(this.people['Lucy'].messagesHeard(this.messageFromSean), contains(this.messageFromSean))
});

Then('{word} should not hear a shout', function (name) {
  assertThat(this.people[name].messagesHeard(), not(contains(this.messageFromSean)))
});

Then('Larry should not hear Sean\'s message', function () {
  assertThat(this.people['Larry'].messagesHeard(this.messageFromSean), not(contains(this.messageFromSean)))
});

Then('Lucy hears the following messages:', function (expectedMessages) {
  let actualMessages = this.people['Lucy'].messagesHeard().map(message => [message])

  assert.deepEqual(actualMessages, expectedMessages.raw())
});