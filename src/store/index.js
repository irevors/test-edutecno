import { createStore } from 'vuex';

import orders from './modules/orders/index';
import autenticacion from './modules/auth/index';
import dashboard from './modules/dashboard/index';

export default createStore({
  modules: {
    auth: autenticacion,
    orders,
    dashboard,
  },
});
