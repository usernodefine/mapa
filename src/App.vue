<template>
  <div id="app">
          <div class="map-container">
            <router-link to="/">Guardar Coordenadas</router-link>
            <br>
            <router-link to="/list">Lista de Coordenadas</router-link>
            <router-view></router-view>
            <SatelliteMap/>
          </div>
  </div>
</template>

<script>
import SatelliteMap from './components/MapaSate.vue'

export default {
  name: 'App',
  components: {
    SatelliteMap
  }
}
</script>
<style scoped>
.map-container {
  height: 600px;
}

.options-container {
  height: 600px;
  background-color: #f2f2f2;
  padding: 10px;
}
</style>
