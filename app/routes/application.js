import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('patch');
  },

  actions: {
    newPatch() {
      let patch = this.store.createRecord('patch', { name: 'a patch' });
      patch.save();
    }
  }

});
