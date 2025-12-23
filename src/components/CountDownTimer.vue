<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { TIMER } from "@/config/UIConstants";
import { API_MESSAGES } from "@/config/messages";

const props = defineProps<{
  endDate: string;
}>();

if (!props) alert(API_MESSAGES.FAIL.TIMER);

const leftTime = ref(0);
const pad = (num: number): string => String(num).padStart(2, "0");
let timerId: number | null = null;

const calculateLeftTime = () => {
  const nowTime = new Date();
  const endTime = new Date(props.endDate);

  const remainingTime = Math.floor((endTime.getTime() - nowTime.getTime()) / 1000);
  leftTime.value = remainingTime > 0 ? remainingTime : 0;
};

onMounted(() => {
  calculateLeftTime();

  timerId = setInterval(() => {
    calculateLeftTime();

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
  <div class="flex justify-end mt-30">
    <div class="flex flex-col items-end gap-6">
      <div class="flex flex-col items-end gap-2">
        <p>{{ TIMER.DESCRIPTION }}</p>
        <p class="font-bold text-3xl">{{ TIMER.TITLE }}</p>
      </div>

      <p class="font-bold font-mono text-6xl text-[#007AFF] whitespace-nowrap">
        {{ pad(Math.floor(leftTime / 3600)) }} : {{ pad(Math.floor((leftTime % 3600) / 60)) }} :
        {{ pad(leftTime % 60) }}
      </p>
    </div>
  </div>
</template>
