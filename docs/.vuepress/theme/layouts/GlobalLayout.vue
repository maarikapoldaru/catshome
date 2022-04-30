<template>
  <div>
    <div class="banner">
      <p>THIS WEBSITE IS FAKE / SEE VEEBISAIT POLE PÄRIS</p>
    </div>
    <div>
      <GlobalLayout></GlobalLayout>
      <div class="home">
        <!-- set this class to allow our footer to look like the 'normal' homepage's footer -->
        <div class="footer">
          <div class="columns">
            <div class="column">
              <h4>Kontakt</h4>
              <p>info@kurrumurru.ee<br>+372 1234 5678<br>Kassi tee, Kurru Murru saar</p>
            </div>
            <div class="column">
              <h4>Annetamine</h4>
              <p>Swed EE12345678912345678<br>SEB EE12345678912345678<br>LHV EE12345678912345678</p>
            </div>
            <div class="column">
              <h4>Sotsiaalmeedia</h4>
                <a class="icon" href="https://www.instagram.com"><font-awesome-icon icon="fab fa-instagram" /></a>
                <a class="icon" href="https://www.facebook.com"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
            </div>
          </div>
          <div>
            <!-- Start of WebFreeCounter Code -->
            <a href="https://www.webfreecounter.com/" target="_blank">
              <img src="https://www.webfreecounter.com/hit.php?id=gevqkaoc&nd=6&style=48" border="0" alt="web counter"
            /></a>
            <!-- End of WebFreeCounter Code -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GlobalLayout from "@vuepress/core/lib/client/components/GlobalLayout.vue";

export default {
  components: {
    GlobalLayout
  }
};
</script>

