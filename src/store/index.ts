import Vue from 'vue'
import Vuex from "vuex";

import user,{UserState} from "./modules/user";

Vue.use(Vuex);

export interface RootState {
  user: UserState;
}

export default new Vuex.Store<RootState>({
  modules: {
    user,
  }
})
