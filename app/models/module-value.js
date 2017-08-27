import DS from 'ember-data';
import Module from '../models/module';

export default Module.extend({
  value: DS.attr('number'),
});
