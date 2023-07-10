<template>
  <div  style="width: 100%; height: 600px;">
    <h2>Ubicación</h2>
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker v-for="coordinate in coordinates" :key="coordinate.latitude" :lat-lng="[coordinate.latitude, coordinate.longitude]"
>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker  } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css';
//import markerImage from '@/assets/icono.png';
export default {
  name: 'SatelliteMap',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    
    return {
      zoom: 13,
      center: [8.75038, -75.87884],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }
  },
  computed: {
    coordinates() {
      return this.$store.getters.getCoordinates
    }
  },
}

</script>
