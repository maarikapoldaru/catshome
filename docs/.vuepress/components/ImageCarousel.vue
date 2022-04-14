<template>
  <div style="width: 500px; height: 300; display: block; margin: 0 auto">
    <carousel :per-page="1" :center-mode="true">
      <slide>
        <img src="/catshome/assets/img/events/cleaningday0.jpg" />
      </slide>
      <slide>
        <img src="/catshome/assets/img/events/cleaningday1.jpg" />
      </slide>
      <slide>
        <img src="/catshome/assets/img/events/cleaningday2.png" />
      </slide>
      <slide>
        <img src="/catshome/assets/img/events/cleaningday3.jpg" />
      </slide>
      <slide>
        <img src="/catshome/assets/img/events/cleaningday5.jpg" />
      </slide>
      <slide>
        <img src="/catshome/assets/img/events/cleaningday6.png" />
      </slide>
      <slide>
        <img src="/catshome/assets/img/events/cleaningday7.jpg" />
      </slide>
      <slide>
        <img src="/catshome/assets/img/events/cleaningday9.jpg" />
      </slide>
      <slide>
        <img src="/catshome/assets/img/events/cleaningday10.jpg" />
      </slide>
      <slide>
        <img src="/catshome/assets/img/events/cleaningday11.jpeg" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
};
</script>
