<template>
  <div class="post-container">
    <router-link v-for="(page, index) in files" :to="page.path" class="routerLink" :key="index">
      <div class="card">
        <img class="image-section" :src="page.frontmatter.thumbnail" :alt="page.title" />

        <div class="post-detail">
          <div class="title-section">{{ page.title }}</div>
          <div class="description-section">{{ page.frontmatter.description }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  computed: {
    files() {
      return this.$site.pages.filter((p) => {
        return p.path.indexOf("/kodus/cats/") >= 0;
      });
    },
  },
};
</script>
<style scoped>
.post-container {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}
.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 400px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 5px;
  font-size: 1rem;
}
.post-detail {
  display: flex;
  flex-direction: column;
}
.image-section {
  height: 100%;
  width: 100%;
}
.routerLink {
  text-decoration: none !important;
}
.description-section {
  width: 100%;
  display: flex;
  justify-content: center;
  color: black;
  margin: 10px;
}
.title-section {
  text-decoration: none;
  margin: 10px;
  color: black;
}
</style>
