import Controller from '@ember/controller';
export default Controller.extend({
  actions: {
    signIn:function(){
      //sign in by email and password
      this.get('session').open('firebase', {
            provider:'password',
            email: this.get('emailAddressC'),
            password: this.get('textC')
          }).then(function(data) { alert('Login Successful ' + data.currentUser.email);}).catch(function(error) {alert(error);});
          this.set('emailAddressC', '');
          this.set('textC', '');
    },
    signOut: function() {
                this.get('session').close();//.then(function() {this.transitionTo('signin');}.bind(this));
              //  }
    }}});
//});
