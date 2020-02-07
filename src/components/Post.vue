<template>
  <div class="Post" :style="{ animationDelay }">
    <Picture v-bind="$props" />
    <Caption />
    <Likes />
  </div>
</template>

<script>
import Likes from "@/components/Likes.vue";
import Picture from "@/components/Picture.vue";
import Caption from "@/components/Caption.vue";
export default {
  components: {
    Likes,
    Picture,
    Caption
  },
  props: ["accessibilityCaption", "url"],
  computed: {
    animationDelay() {
      return `${Math.random()}s`;
    }
  }
};
</script>

<style>
@keyframes FadeIn {
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(250px);
  }
  85% {
    transform: scale(1.02) translateY(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.Post {
  opacity: 0;
  animation: FadeIn 1.5s ease-out forwards;
}
</style>
