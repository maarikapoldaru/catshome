<template>
  <!-- https://www.npmjs.com/package/vue-gallery -->
  <div class="padme">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{
        backgroundImage: 'url(' + image + ')',
        width: '300px',
        height: '200px',
      }"
    ></div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  data: function () {
    return {
      images: [
        "/catshome/assets/img/events/cleaningday0.jpg",
        "/catshome/assets/img/events/cleaningday1.jpg",
        "/catshome/assets/img/events/cleaningday2.png",
        "/catshome/assets/img/events/cleaningday3.jpg",
        "/catshome/assets/img/events/cleaningday4.jpg",
        "/catshome/assets/img/events/cleaningday5.jpg",
        "/catshome/assets/img/events/cleaningday6.png",
        "/catshome/assets/img/events/cleaningday7.jpg",
        "/catshome/assets/img/events/cleaningday8.jpg",
        "/catshome/assets/img/events/cleaningday9.jpg",
        "/catshome/assets/img/events/cleaningday10.jpg",
        "/catshome/assets/img/events/cleaningday11.jpeg",
      ],
      index: null,
    };
  },

  components: {
    gallery: VueGallery,
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.image {
  float: clear;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}

.padme {
  padding-top: 2.5em;
  padding-bottom: 2.5em;
  display: table;
  /* display:inline-block;
    columns: 3; */
}
</style>
