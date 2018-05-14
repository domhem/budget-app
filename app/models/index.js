import DS from 'ember-data';

export default DS.Model.extend({

  income:DS.attr('number'),
  description: DS.attr('string'),
  email:DS.attr('string')
});
