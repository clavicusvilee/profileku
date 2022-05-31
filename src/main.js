import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import StoryblokVue from 'storyblok-vue'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false
const isProd = process.env.NODE_ENV === 'production'
const SitemapPlugin = require('sitemap-webpack-plugin').default
// You can write the paths as an array of strings or an array of objects
const paths = [
  {
      path: '/',
      lastmod: '2022-4-13',
      priority: 1.0,
      changefreq: 'yearly'
  },
  {
      path: '/resume/',
      lastmod: '2022-4-13',
      priority: 0.9,
      changefreq: 'yearly'
  },
  {
    path: '/services/',
    lastmod: '2022-4-13',
    priority: 0.9,
    changefreq: 'yearly'
    },
    {
    path: '/contact/',
    lastmod: '2022-4-13',
    priority: 0.9,
    changefreq: 'yearly'
    },
]

module.exports = {
    configureWebpack: {
        plugins: [
            new SitemapPlugin({ base: 'https://gaboonware.my.id', paths })
        ]
    },
    // Other exports here
},
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(StoryblokVue)
Vue.use(VueAnalytics, {
  id: 'G-YN5YX5T7WQ',
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
})
