<script setup lang="ts">
import CountDownTimer from "./components/CountDownTimer.vue";
import EventHeaderInfo from "./components/EventHeaderInfo.vue";
import EventRewardInfo from "./components/EventRewardInfo.vue";
</script>

<template>
  <header>
    <EventHeaderInfo />
  </header>

  <main class="flex items-start gap-10">
    <div class="flex-1">
      <EventRewardInfo />
    </div>

    <div class="w-full max-w-md -mt-10">
      <CountDownTimer />
    </div>
  </main>
</template>
