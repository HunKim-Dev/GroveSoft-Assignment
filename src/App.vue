<script setup lang="ts">
import CountDownTimer from "./components/CountDownTimer.vue";
import EventHeaderInfo from "./components/EventHeaderInfo.vue";
import EventRewardInfo from "./components/EventRewardInfo.vue";
import CardDraw from "./components/CardDraw.vue";
import ApplicationButton from "./components/ApplicationButton.vue";
import BackGroundParallax from "./components/BackGroundParallax.vue";
</script>

<template>
  <BackGroundParallax />
  <header>
    <Transition
      appear
      enter-active-class="transition-opacity duration-4000 ease-out delay-0"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <div>
        <EventHeaderInfo />
      </div>
    </Transition>
  </header>

  <main class="flex items-start gap-10">
    <Transition
      appear
      enter-active-class="transition-opacity duration-3000 ease-out delay-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <div class="flex-1">
        <EventRewardInfo />
      </div>
    </Transition>

    <div class="w-full max-w-md flex flex-col items-end gap-10">
      <Transition
        appear
        enter-active-class="transition-opacity duration-3000 ease-out delay-600"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
      >
        <div class="-mt-30">
          <CardDraw />
        </div>
      </Transition>

      <Transition
        appear
        enter-active-class="transition-opacity duration-3000 ease-out delay-900"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
      >
        <div>
          <CountDownTimer />
        </div>
      </Transition>
    </div>
  </main>

  <footer>
    <Transition
      appear
      enter-active-class="transition-opacity duration-3000 ease-out delay-1200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <div class="w-full flex justify-center mt-15 mb-10">
        <ApplicationButton />
      </div>
    </Transition>
  </footer>
</template>
