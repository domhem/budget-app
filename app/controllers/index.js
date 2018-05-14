import Controller from '@ember/controller';
export default Controller.extend({
  actions: {
    saveIncome() {
      // getting email from session
      var email = this.get('session.currentUser.email');
      var user = this.store.createRecord('index',{
        income_description:this.get('income_description'),
        income:this.get('income'),
        email:email
      });
      user.save();

      this.set('income', '');
      this.set('income_description', '');
      //this.set('display_income', this.get('income'));
    },

    saveExpense() {
      // getting email from session
      var email = this.get('session.currentUser.email');
      var user = this.store.createRecord('index',{
        expense_description:this.get('expense_description'),
        expense:this.get('expense'),
        email:email
      });
      user.save();

      this.set('expense', '');
      this.set('expense_description', '');
      //this.set('display_income', this.get('income'));
    },

    getBalance(){
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

  getTotalInc(){
    var totalinc = 0;
    this.get('inc').toArray().forEach(function(item) {
      totalinc = totalinc + item.get('income');
  });

  //alert(balance);
  this.set('incomev', '+' + totalinc);
},

getTotalExp(){
  var totalexp = 0;
  this.get('exp').toArray().forEach(function(item) {
    totalexp = totalexp + item.get('expense');
});

//alert(balance);
this.set('expensev', '-' + totalexp);
},

}

});
