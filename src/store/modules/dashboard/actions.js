import API from '@/APIS/requests';

export default {
  async getDashboard({ commit, rootGetters }) {
    const auth = rootGetters['auth/getAuth'];
    const dashboard = await API.dashboard(auth);
    commit('saveDashboard', dashboard.data);
  },
};
