import Controller from '@ember/controller';
export default Controller.extend({
  actions: {
    saveStuff() {
      // getting email from session
      var email = this.get('session.currentUser.email');
      var user = this.store.createRecord('stuff',{
        description:this.get('thing'),
        amount:this.get('amount'),
        email:email
      });
      user.save();
    }
  }

});
