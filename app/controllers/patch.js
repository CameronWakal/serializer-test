import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newModule() {
      let patch = this.get('model');
      let module = this.store.createRecord('module', { name: 'a module' });
      patch.get('modules').pushObject(module);
      module.save();
      patch.save();

    }
  }
});
