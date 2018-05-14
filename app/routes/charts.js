import Route from '@ember/routing/route';
import {set} from '@ember/object';
import {hash} from 'rsvp';

export default Route.extend({
  model() {
    var email = this.get('session.currentUser.email');
      return hash({
        inc: this.store.findAll('index').then(function(data){
          return data.filterBy('email',email).filterBy('income');

        }),
        exp: this.store.findAll('index').then(function(data){
          return data.filterBy('email',email).filterBy('expense');

        })
      });
    },
    setupController(controller, model) {
      this._super(...arguments);
      set(controller, 'inc', model.inc);
      set(controller, 'exp', model.exp);
    }
});
