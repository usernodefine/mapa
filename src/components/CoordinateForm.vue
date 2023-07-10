<template>
    <div>
      <h2>Guardar Coordenadas</h2>
      <form @submit.prevent="saveCoordinate">
        <div>
          <label>Latitud:</label>
          <input v-model="latitude" type="text" required />
        </div>
        <div>
          <label>Longitud:</label>
          <input v-model="longitude" type="text" required />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        latitude: '',
        longitude: ''
      }
    },
    methods: {
      saveCoordinate() {
        const coordinate = {
          latitude: this.latitude,
          longitude: this.longitude
        }
        this.$store.dispatch('addCoordinate', coordinate)
        this.latitude = ''
        this.longitude = ''
      }
    }
  }
  </script>
  