import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newModule() {
      let patch = this.get('model');
      let module = this.store.createRecord('module', { name: 'a module' });
      patch.get('modules').pushObject(module);
      module.save();
      patch.save();
    },
    newValueModule() {
      let patch = this.get('model');
      let module = this.store.createRecord('module-value', { name: 'a value module', value: 5 });
      patch.get('modules').pushObject(module);
      module.save();
      patch.save();
    }
  }
});
