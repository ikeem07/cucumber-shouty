import { Person, Network } from '../../classes/shouty.js';
import { Given, When, Then } from '@cucumber/cucumber';
import { assertThat, is } from 'hamjest';

//Given(/^Lucy is located (\d+) meter?s from Sean$/, function (distance) {
// Given('Lucy is located {int} meter(s) from Sean', function (distance) {
//   this.lucy = new Person
//   this.sean = new Person
//   this.lucy.moveTo(distance)
// });

Given('Lucy is {int} meter(s) from Sean', function (distance) {
  this.network  = new Network()
  this.lucy     = new Person(this.network)
  this.sean     = new Person(this.network)

  this.lucy.moveTo(distance)
});
       
When('Sean shouts {string}', function (message) {
  this.sean.shout(message)
  this.messageFromSean = message
});
       
Then('Lucy should hear Sean\'s message', function () {
  assertThat(this.lucy.messagesHeard(this.messageFromSean), is([this.messageFromSean]))
});