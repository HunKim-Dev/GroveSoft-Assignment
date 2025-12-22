<script setup lang="ts">
import { EVENT_INFO, EVENT_BENEFITS_LIST } from "@/config/UIConstants";
</script>

<template>
  <div class="grid gap-2">
    <h2 class="text-2xl mb-2 font-semibold">{{ EVENT_INFO.REWARD.TITLE }}</h2>
    <ul class="flex flex-col items-start gap-2.5">
      <li
        v-for="benefit in EVENT_BENEFITS_LIST"
        :key="benefit"
        class="benefit-hover hover:bg-black hover:text-white hover:font-medium hover:scale-[1.25]"
      >
        {{ benefit }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.benefit-hover {
  padding-inline: 0.5rem;
  cursor: pointer;
  transition: 300ms;
}
</style>
