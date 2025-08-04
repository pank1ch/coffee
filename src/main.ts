import './styles/main.scss';
import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';
import HomePage from './pages/HomePage.vue';

import VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: HomePage,
    },
  ],
});

app.use(router);

app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCUL-ZCfzLZdfrLJ1Hvy5voVjjSnhmSYbM',
  },
});

app.mount('#app');
