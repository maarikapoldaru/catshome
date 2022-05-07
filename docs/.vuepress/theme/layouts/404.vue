<template>
  <main>
    <section>
      <img :src="$withBase('/assets/img/404_cat.svg')" alt="ei leitud lehe kass" />
    </section>
    <section>
      <h1>Lehte ei leitud</h1>
    </section>
    <section>
      <a href="/catshome/">Tagasi avalehele</a>
    </section>
  </main>
</template>

<style scoped>
main {
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

section {
  display: flex;
}

img {
  height: 30vh;
}
</style>
