<script setup>
import markerIcon from '@/assets/logos/map-marker.png';
import { ref } from 'vue';

const center = {
  lat: 34.009944915771484,
  lng: -118.49195098876953,
};

const markerOptions = ref(null);

const onMapLoaded = () => {
  console.log('loaded');
  markerOptions.value = {
    position: center,
    icon: {
      url: markerIcon,
      scaledSize: { width: 50, height: 66 },
    },
    animation: google.maps.Animation.DROP,
  };
};
</script>

<template>
  <div class="container">
    <GMapMap class="map" :center="center" :zoom="16" @idle="onMapLoaded">
      <GMapMarker v-if="markerOptions" :options="markerOptions" />
    </GMapMap>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 0 !important;
}

.map {
  width: 100%;
  height: 420px;

  @media (min-width: 768px) {
    height: 480px;
  }

  @media (min-width: 1440px) {
    height: 540px;
  }
}
</style>
