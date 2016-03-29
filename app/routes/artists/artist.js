import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.$.getJSON(`http://itp-api.herokuapp.com/artists/${params.artist_id}`);
  },
});
