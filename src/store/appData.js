const state = {
  barColor: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
  barImage:
    'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg',
  drawer: {
    opened: true,
    minimised: false
  }
}

const mutations = {
  SET_BAR_IMAGE (state, payload) {
    state.barImage = payload
  },
  SET_DRAWER (state, payload) {
    state.drawer = payload
  }
}

const actions = {}

const getters = {
  getConnectionToken: state => () => state.token
}

export default {
  state,
  getters,
  actions,
  mutations
}
