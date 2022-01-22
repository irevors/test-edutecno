import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state: {
    auth: null,
    isLoggedIn: true,
  },
  mutations,
  getters,
  actions,
};
