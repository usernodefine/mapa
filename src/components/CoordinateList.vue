<template>
    <div>
      <h2>Lista de Coordenadas</h2>
      <ul>
        <li v-for="coordinate in coordinates" :key="coordinate.latitude">
          Latitud: {{ coordinate.latitude }}, Longitud: {{ coordinate.longitude }}
          <button @click="deleteCoordinate(coordinate)">Eliminar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      coordinates() {
        return this.$store.getters.getCoordinates
      }
    },
    methods: {
      deleteCoordinate(coordinate) {
        this.$store.commit('deleteCoordinate', coordinate)
      }
    }
  }
  </script>
  