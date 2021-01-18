import Vue from 'vue'
import Vuetify from 'vuetify'
import i18n from '@/config/i18n'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// import '@/sass/variables.scss'
import '@/sass/overrides.sass'

Vue.use(Vuetify)

// const theme = {
//   primary: '#4CAF50',
//   secondary: '#9C27b0',
//   accent: '#9C27b0',
//   info: '#00CAE3',
// }

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  },
  breakpoint: {
    mobileBreakpoint: 'sm' // This is equivalent to a value of 960
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#1976d2',
        secondary: '#424242',
        accent: '#9C27b0',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        // primary: colors.blue.lighten3,
      }
    }
  },
    icons: {
      iconfont: 'md'
    }
})
