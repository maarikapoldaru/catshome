<template>
  <!-- https://www.npmjs.com/package/vue2-google-maps -->
  <div>
    <h2>Catshome asukoht Tallinnas</h2>

    <gmap-map :center="center" :zoom="13" style="width: 100%; height: 555px">
      <gmap-marker :key="index" v-for="(gmp, index) in locations" :position="gmp" @click="center = gmp"></gmap-marker>
    </gmap-map>
  </div>
</template>

<script async defer>
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyD375RY8C35EDIqWTOcHXRS3uzGWO4D1Bk",
    libraries: "places",
  },
});
export default {
  name: "DrawGoogleMap",
  data() {
    return {
      center: {
        lat: 59.425246,
        lng: 24.76961,
      },
      locations: [],
      currentLocation: null,
    };
  },

  mounted() {
    this.setLocationLatLng();
  },

  methods: {
    setPlace(loc) {
      this.currentLocation = loc;
    },
    setLocationLatLng: function () {
      navigator.geolocation.getCurrentPosition((geolocation) => {
        this.center = {
          lat: geolocation.coords.latitude,
          lng: geolocation.coords.longitude,
        };
      });

      this.locations = [
        {
          lat: 59.429786,
          lng: 24.729415,
          label: "Catshome",
        },
      ];
    },
  },
};
</script>
