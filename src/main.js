// Import Global Components
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// The relative path of the components folder
// // Whether or not to look in subfolders
// // // The regular expression used to match base component filenames
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

// Get component config
// // Get PascalCase name of component
// // // Gets the file name regardless of folder depth
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // Register component globally
  // // Look for the component options on `.default`, which will
  // // exist if the component was exported with `export default`,
  // // otherwise fall back to module's root.
  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
