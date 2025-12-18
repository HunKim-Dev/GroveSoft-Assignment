<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const leftTime = ref<number>(6000);
let timerId: number | null = null;

const pad = (num: number): string => String(num).padStart(2, "0");

onMounted(() => {
  timerId = setInterval(() => {
    if (leftTime.value === 0) return;

    leftTime.value--;

    if (leftTime.value === 0 && timerId !== null) {
      clearInterval(timerId);
    }
  }, 1000);
});

onUnmounted(() => {
  if (timerId !== null) clearInterval(timerId);
});
</script>

<template>
  <div class="flex justify-end items-center min-h-screen pr-24">
    <div class="flex flex-col items-end gap-10">
      <div class="flex flex-col items-end gap-2">
        <p class="font-bold text-3xl">이벤트 종료까지 남은 시간</p>
        <p class="text-gray-800 text-sm">이벤트 참여하시면 혜택을 받으실 수 있습니다.</p>
      </div>

      <p class="font-bold font-mono text-6xl">
        {{ pad(Math.floor(leftTime / 3600)) }} : {{ pad(Math.floor((leftTime % 3600) / 60)) }} :
        {{ pad(leftTime % 60) }}
      </p>
    </div>
  </div>
</template>
