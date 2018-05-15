import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    var email = this.get('session.currentUser.email');
      return this.store.findAll('signup').then(function(data){
        return data.filterBy('email',email);
      })
    },

});
