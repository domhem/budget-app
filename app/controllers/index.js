import Controller from '@ember/controller';
export default Controller.extend({
  actions: {
    saveData() {
      // getting email from session
      var email = this.get('session.currentUser.email');
      var user = this.store.createRecord('index',{
        description:this.get('description'),
        income:this.get('income'),
        email:email
      });
      user.save();

      this.set('income', '');
      this.set('description', '');
      //this.set('display_income', this.get('income'));
    }
  }

});
