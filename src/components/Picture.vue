<template>
  <img class="Picture" :src="url" :alt="accessibilityCaption" />
</template>

<script>
export default {
  props: {
    url: {
      required: true,
      type: String
    },
    accessibilityCaption: {
      required: true,
      type: String
    }
  }
};
</script>

<style>
.Picture {
  width: 100%;
}
</style>
