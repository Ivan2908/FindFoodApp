/** Vuetify Vite */
import VueCompositionAPI from '@vue/composition-api';
import Vue from 'vue';

import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

import App from './App.vue';

Vue.use(VueCompositionAPI);
Vue.config.productionTip = true;

Vue.mixin({
  filters: {
    truncate(text: string, length: number, suffix: number): string {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    },
  },
});

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app');
