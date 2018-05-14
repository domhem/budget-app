import DS from 'ember-data';

export default DS.Model.extend({

  income:DS.attr('number'),
  expense:DS.attr('number'),
  income_description: DS.attr('string'),
  expense_description: DS.attr('string'),
  email:DS.attr('string')
});
