import API from '@/APIS/requests';

export default {
  async loginUser({ commit }, user) {
    const auth = await API.login(user);
    commit('saveLoggedInUser', auth);
  },
};
