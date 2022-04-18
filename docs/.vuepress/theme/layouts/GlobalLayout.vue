<template>
  <div>
    <GlobalLayout></GlobalLayout>
    <div class="home">
      <!-- set this class to allow our footer to look like the 'normal' homepage's footer -->
      <div class="footer">
        this is the footer
        <NavLink :item="privacy" />
        <NavLink :item="imprint" />
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
</template>

<script>
import GlobalLayout from "@vuepress/core/lib/client/components/GlobalLayout.vue";
import NavLink from "@parent-theme/components/NavLink.vue";

export default {
  components: {
    GlobalLayout,
    NavLink,
  },
  computed: {
    privacy() {
      return { id: "privacy", text: "Privacy", link: "/privacy/" };
    },
    imprint() {
      return { id: "imprint", text: "Imprint", link: "/imprint/" };
    },
  },
};
</script>
