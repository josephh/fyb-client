import Ember from 'ember';

export default Ember.Route.extend({
  id: '',
  journalId: '',
  date: '',
  location : {
    name: '',
    lat: '',
    long: '',
    postcode: ''
  },
  fishes: []
});
