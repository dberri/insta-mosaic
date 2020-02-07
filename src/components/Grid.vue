<template>
  <section class="Grid">
    <slot />
  </section>
</template>

<script>
export default {
  name: "Grid"
};
</script>

<style>
.Grid {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 0 auto;
  max-width: 960px;
}
</style>
