<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

const onScroll = () => {
  const y = window.scrollY;
  const scale = 1 + y * 0.003;

  const img = document.querySelector<HTMLImageElement>(".product");
  if (!img) return;

  img.style.transform = `scale(${scale})`;
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <div class="parallax">
    <img src="/eventBackGround.png" alt="product" class="product opacity-30" draggable="false" />
  </div>
</template>

<style scoped>
.parallax {
  position: fixed;
  inset: 0;
  z-index: -10;
  pointer-events: none;
}

.product {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
