import Vue from 'vue'
import lodash from '@/utils/lodash';
window.axios = require('axios');
window.Vue = Vue;
window._ = lodash;
Vue.config.productionTip = false;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
require("./utils/Filters/GlobalFilters");

let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
