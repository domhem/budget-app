import DS from 'ember-data';

export default DS.Model.extend({
  income_description: DS.attr('string'),
  income: DS.attr('number'),
  expense: DS.attr('number')
});
