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

          var balance = 0;
          this.get('inc').toArray().forEach(function(item) {
            balance = balance + item.get('income');
        });

          this.get('exp').toArray().forEach(function(item) {
            balance = balance - item.get('expense');
        });
        //alert(balance);
        this.set('balancev', '+' + balance);
    },
    signOut: function() {
                this.get('session').close();//.then(function() {this.transitionTo('signin');}.bind(this));
              //  }

    },

  //  getBalance(){
  //    var balance = 0;
  //    this.get('inc').toArray().forEach(function(item) {
  //      balance = balance + item.get('income');
  //  });

  //    this.get('exp').toArray().forEach(function(item) {
  //      balance = balance - item.get('expense');
  //  });
  //  //alert(balance);
  //  this.set('balancev', '+' + balance);

  //}
}});

//});
