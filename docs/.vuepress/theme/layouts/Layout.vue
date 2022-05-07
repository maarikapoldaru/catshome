<template>
  <ParentLayout>
    <template #page-bottom>
      <div>My custom footer</div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";

export default {
  name: "Layout",

  components: {
    ParentLayout,
  },
};
</script>
