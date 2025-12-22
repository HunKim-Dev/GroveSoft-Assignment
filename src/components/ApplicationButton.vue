<script setup lang="ts">
import { ref } from "vue";
import ApplicationFrom from "./ApplicationFrom.vue";

const openApplicationFrom = ref(false);
</script>

<template>
  <div class="flex justify-center items-center">
    <button
      @click="openApplicationFrom = true"
      class="px-30 py-5 cursor-pointer text-2xl font-bold rounded-full border bg-[#007AFF] text-white transition hover:bg-[#004085] active:scale-90"
    >
      응모하기
    </button>
  </div>
  <ApplicationFrom v-if="openApplicationFrom" @close="openApplicationFrom = false" />
</template>

<style scoped></style>
