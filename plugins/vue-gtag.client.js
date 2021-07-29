import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  const hasConsent = app.$cookies.get('ny_consent')
  Vue.use(
    VueGtag,
    {
      config: { id: process.env.googleAnalyticsId },
      bootstrap: hasConsent,
      appName: 'NXT_YOU',
      enabled: !process.env.dev,
      pageTrackerScreenviewEnabled: true,
    },
    app.router
  )
}
