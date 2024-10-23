import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';
import Store from './store';
import Style from './assets/stylesheets/all.scss';

createApp(App)
    .use(Router)
    .use(Store)
    .mount('#app')
