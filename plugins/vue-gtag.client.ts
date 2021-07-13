import Vue from 'vue'
import VueGtag from 'vue-gtag'

console.log('process.env', process.env)
Vue.use(VueGtag, {
  config: { id: process.env.googleAnalyticsId },
  appName: 'NXT_YOU',
  enabled: !process.env.dev,
  pageTrackerScreenviewEnabled: true,
})
