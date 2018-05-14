import DS from 'ember-data';

export default DS.Model.extend({

  thing:DS.attr('string'),
  amount: DS.attr('string'),
  email:DS.attr('string')
});
