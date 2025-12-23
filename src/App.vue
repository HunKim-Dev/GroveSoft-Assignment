<script setup lang="ts">
import { ref, onMounted } from "vue";
import CountDownTimer from "./components/CountDownTimer.vue";
import EventHeaderInfo from "./components/EventHeaderInfo.vue";
import EventRewardInfo from "./components/EventRewardInfo.vue";
import CardDraw from "./components/CardDraw.vue";
import ApplicationButton from "./components/ApplicationButton.vue";
import BackGroundParallax from "./components/BackGroundParallax.vue";
import { API_MESSAGES } from "./config/apiMessages";

type EventData = {
  title: string;
  endDate: string;
  description: string;
  rewards: { id: number; name: string; image: string }[];
};

const event = ref<EventData | null>(null);

onMounted(async () => {
  try {
    const response = await fetch("https://694a57351282f890d2d85e1d.mockapi.io/event", {
      method: "GET",
    });

    if (!response.ok) throw new Error(API_MESSAGES.FAIL.GET);

    const data = await response.json();
    event.value = data[0];
  } catch (error) {
    alert(error);
    console.error({ message: error });
  }
});
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
        <EventHeaderInfo
          v-if="event"
          :title="event.title"
          :description="event.description"
          :end-date="event.endDate"
        />
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
        <EventRewardInfo v-if="event" :rewards="event.rewards" />
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
          <CountDownTimer v-if="event" :end-date="event.endDate" />
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
