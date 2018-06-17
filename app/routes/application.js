import Route from '@ember/routing/route';

export default Route.extend({

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
