import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/index'
import Dashboard from './views/pages/Dashboard'
import UserProfile from './views/pages/UserProfile'
import Entries from './views/pages/Entries'
import EditEntry from './views/pages/EditEntry'

import Login from './views/pages/Login.vue'
import Error from './views/core/Error.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard,
        },
        {
          path: 'users',
          name: 'userProfile',
          component: UserProfile,
        },
        {
          path: 'entries',
          name: 'entries',
          component: Entries,
        },
        {
          path: 'edit_entry',
          name: 'edit_entry',
          component: EditEntry,
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/error',
      name: 'error',
      component: Error,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '*',
      name:'404', 
      component: Error
    }

    // {
    //   path: '/mailbox',
    //   name: 'Mailbox',
    //   component: Mailbox,
    //   meta: {
    //     breadcrumb: [
    //       { name: 'dashboard', href: 'Dashboard' },
    //       { name: 'mailbox' }
    //     ]
    //   }
    // },
  ]
})
