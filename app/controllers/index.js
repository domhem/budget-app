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

function showBal(obj) {
<<<<<<< HEAD
  //console.log(obj);
=======
  console.log(obj);
>>>>>>> 21c27d0bac7da7427798acb155852e23e26c9b6d
  obj.actions.getBalance.bind(obj)();
}



export default Controller.extend({
  init() {
    this._super(...arguments);
    this.$ = $;
    showBal(this);
  },

  mbalance:0,
  mincome: 0,
  mexpense: 0,

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
      this.actions.getBalance.bind(this)();
      // setBalance(this);
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
      this.actions.getBalance.bind(this)();
      // this.actions.getBalance();
      //this.set('display_income', this.get('income'));
    },

    getBalance(){
      this.actions.getTotalInc.bind(this)(() => {
        this.actions.getTotalExp.bind(this)(() => {
          this.set('mbalance', parseFloat(this.get('mincome')) - parseFloat(this.get('mexpense')));
          this.set('balancev', parseFloat(this.get('mincome')) - parseFloat(this.get('mexpense')));
        });
      });
<<<<<<< HEAD

=======
    
>>>>>>> 21c27d0bac7da7427798acb155852e23e26c9b6d

      // .then(function() {
      //   console.log('promise 3');
      //   console.log(this);
      //   console.log(this.get('mincome'));
      //   console.log(this.get('mexpense'));
      //
      //   return;
      // }.bind(this));




      // console.log(this.get('mexpense'));
    //   var balance = 0;
    //   this.get('inc').toArray().forEach(function(item) {
    //     balance = balance + item.get('income');
    // });
    //
    //   this.get('exp').toArray().forEach(function(item) {
    //     balance = balance - item.get('expense');
    // });
    // //alert(balance);
    // this.set('balancev', + balance);
    //
    // this.set('mbalance', 9);
    // console.log(this.get('mbalance'));
  },

<<<<<<< HEAD
  saveBalance() {
    var balance2 = 0;
      this.get('inc').toArray().forEach(function(item) {
        //alert(item.get('income'));
        balance2 = balance2 + item.get('income');
      });
      //alert(balance2);
      this.get('exp').toArray().forEach(function(item) {
        balance2 = balance2 - item.get('expense');
      });
    //  alert(balance2);

      var email = this.get('session.currentUser.email');
      var user = this.store.createRecord('index', {
        balance: balance2,
        email: email
      });
      user.save();
    },

  getTotalInc(fn){
    var email = this.get('session.currentUser.email');
    this.set('mincome', 0);
    this.store.findAll('index').then(function(data){
      var data2 = data.filterBy('email',email).filterBy('income');
      data2.toArray().forEach(function(item) {
        this.set('mincome', this.get('mincome') + parseFloat(item.get('income')));
        //console.log(this.get('mincome'));
      }.bind(this));
      this.set('incomev', '+' + this.get('mincome'));
      fn();
    }.bind(this));
    // console.log("finally", this.get('mincome'));

  //   var totalinc = 0;
  //   this.get('inc').toArray().forEach(function(item) {
  //     totalinc = totalinc + item.get('income');
  // });


},

=======
  getTotalInc(fn){
    var email = this.get('session.currentUser.email');
    this.set('mincome', 0);
    this.store.findAll('index').then(function(data){
      var data2 = data.filterBy('email',email).filterBy('income');
      data2.toArray().forEach(function(item) {
        this.set('mincome', this.get('mincome') + parseFloat(item.get('income')));
        console.log(this.get('mincome'));
      }.bind(this));
      this.set('incomev', '+' + this.get('mincome'));
      fn();
    }.bind(this));
    // console.log("finally", this.get('mincome'));

  //   var totalinc = 0;
  //   this.get('inc').toArray().forEach(function(item) {
  //     totalinc = totalinc + item.get('income');
  // });


},

>>>>>>> 21c27d0bac7da7427798acb155852e23e26c9b6d
getTotalExp(fn){
  var email = this.get('session.currentUser.email');
  this.set('mexpense', 0);
  this.store.findAll('index').then(function(data){
    var data2 = data.filterBy('email',email).filterBy('expense');
    data2.toArray().forEach(function(item) {
      this.set('mexpense', this.get('mexpense') + parseFloat(item.get('expense')));
<<<<<<< HEAD
      //console.log(this.get('mexpense'));
=======
      console.log(this.get('mexpense'));
>>>>>>> 21c27d0bac7da7427798acb155852e23e26c9b6d
    }.bind(this));
    this.set('expensev', '-' + this.get('mexpense'));
    fn();
  }.bind(this));
//   var totalexp = 0;
//   this.get('exp').toArray().forEach(function(item) {
//     totalexp = totalexp + item.get('expense');
// });
//
// //alert(balance);
// this.set('expensev', '-' + totalexp);
},

}

});
