import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators';
import store from '../index';

@Module({ dynamic: true, name: 'login', namespaced: true, store: store })
class Login extends VuexModule {
  
  // data memebers/properties are converted to state
  //State
  user = '';
  isLoggedIn = false;

  //Mutation
  @Mutation
  login(): void {
    (this.isLoggedIn = true), (this.user = 'Alex');
  }
}

export default getModule(Login);
