import _ from 'lodash'
import Vue from 'vue'
import * as types from '../mutation-types'
import { RootState } from '../index'
import { ActionContext, Store, ActionTree } from "vuex";
import { SessionService } from "../../services";
import { Import } from 'vue-di-attributes';

const sessionService = new SessionService();

type UserContext = ActionContext<UserState, RootState>;

export interface UserState {
  auth: string;
}

let initialState: UserState = {
  auth: '',
}

const state: UserState = initialState;
// getters
const getters = {
  auth: state => state.auth
}

// actions
const actions: ActionTree<UserContext, RootState> = {
  ['tryAuth'](context) {
    return sessionService.TryToAuthenticate().then(x => {
      context.commit(types.SET_AUTH, x.token);
    })
  }
}

// mutations
const mutations = {
  [types.SET_AUTH](state, token) {
    state.auth = token
  },
  [types.LOGOUT](state, opts = {}) {
    state.households = []
    for (let f in state) {
      Vue.set(state, f, initialState[f])
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
