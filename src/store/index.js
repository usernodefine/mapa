import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coordinates: []
  },
  mutations: {
    deleteCoordinate(state, coordinate) {
      const index = state.coordinates.findIndex(c => c.latitude === coordinate.latitude && c.longitude === coordinate.longitude)
      if (index !== -1) {
        state.coordinates.splice(index, 1)
      }
    },
    addCoordinate(state, coordinate) {
      state.coordinates.push(coordinate)
    }
  },
  actions: {
    addCoordinate({ commit }, coordinate) {
      commit('addCoordinate', coordinate)
    }
  },
  getters: {
    getCoordinates: state => state.coordinates
  },
  plugins: [
    createPersistedState({
      key: 'my-app', // Cambia 'my-app' por un nombre único para tu aplicación
      paths: ['coordinates'] // Asegúrate de incluir la ruta correcta a las coordenadas en tu estado
    })
  ]
})
