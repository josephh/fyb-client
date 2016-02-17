// routes/application.js
/** ApplicationRoute is entered when your app first boots up.
 * It renders the application template.
 */
import Ember from 'ember';

export default Ember.Route.extend( {
  beforeModel() {
    if(this.get('session').isAuthenticated){
      console.log('is authenticated...');
      this.transitionTo('secure.entries');
    }else{
      console.log('NOT authenticated!');
      this.transitionTo('users');
    }
  },
  actions: {
    invalidateSession: function(){
      this.get('session').invalidate();
    }
  }
});
