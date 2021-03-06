import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  modules: DS.hasMany('module', { polymorphic: true })
});
