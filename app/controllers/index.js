import Controller from '@ember/controller';
import $ from 'jquery';

function rerender(obj, parent, user, inc) {
  var mainNode = obj.$('<div>');
  var subNode = obj.$('<div>');
  var descNode = obj.$('<div>');
  var amtNode = obj.$('<div>');

  mainNode.append(descNode);
  mainNode.append(subNode);
  subNode.append(amtNode);

  mainNode.addClass('item clearfix');
  subNode.addClass('right clearfix');
  descNode.addClass('item__description');
  amtNode.addClass('item__value');

  if(inc) {
    descNode.text(user.income_description);
    amtNode.text(user.income);
  } else {
    descNode.text(user.expense_description);
    amtNode.text(user.expense);
  }

  obj.$(parent).append(mainNode);

}

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.$ = $;
  },
  actions: {
    saveIncome() {
      // getting email from session
      var email = this.get('session.currentUser.email');
      var userData = {
        income_description:this.get('income_description'),
        income:this.get('income'),
        email:email
      };
      var user = this.store.createRecord('index', userData);
      user.save();

      this.set('income', '');
      this.set('income_description', '');
      rerender(this, '#income_list:last-child', userData, 1);
      //this.set('display_income', this.get('income'));
    },

    saveExpense() {
      // getting email from session
      var email = this.get('session.currentUser.email');
      var userData = {
        expense_description:this.get('expense_description'),
        expense:this.get('expense'),
        email:email
      };
      var user = this.store.createRecord('index', userData);
      user.save();

      this.set('expense', '');
      this.set('expense_description', '');
      rerender(this, '#expense_list:last-child', userData);
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
