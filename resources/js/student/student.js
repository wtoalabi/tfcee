require('../bootstrap');

import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
import vuetify from '../plugins/vuetify.js' // path to vuetify export

const files = require.context('./pages', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
Vue.component('default', require('../Default').default);
console.log(files.keys());

new Vue({
    vuetify,
}).$mount('#student');
