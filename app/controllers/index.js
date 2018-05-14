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
    }
  }

});
