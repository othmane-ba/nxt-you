import Vue from 'vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: process.env.googleAnalyticsId },
  appName: 'NXT_YOU',
  enabled: !process.env.dev,
  pageTrackerScreenviewEnabled: true,
})
