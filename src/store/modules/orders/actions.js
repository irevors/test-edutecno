import API from '@/APIS/requests';

export default {
  async getDashboard({ commit }) {
    const orders = await API.orderMonitor();
    commit('saveOrders', orders.data);
  },
};
