import { createApp } from 'vue'
import TopPage from './TopPage.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(TopPage).use(ElementPlus).mount('#app')
