import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
export default Controller.extend({

  firebaseApp :service(),
  actions: {
    createUser() {
      var email = this.get('emailAddressS');
      var password = this.get('textS');
      var address = this.get('textAddress');
      var fname = this.get('textName');
        //  var userID = this.get('session.currentUser.uid');

       const auth = this.get('firebaseApp').auth();
       auth.createUserWithEmailAndPassword(email, password).then(function(userResponse){
      //   userID = userResponse.uid;
      alert('Your account has been created.');
          }).catch(function(error) {alert(error);});

          //saveing to ember data (model)
          var user = this.store.createRecord('signup',{
            email: email,
            address: address,
            name: fname,
          });
          user.save();

          this.transitionToRoute('application');
          this.set('emailAddressS', '');
          this.set('textS', '');
          this.set('textAddress', '');
          this.set('textName', '');
          //return this.get('session').fetch().catch(function() {});


         //},

  }
}
});
