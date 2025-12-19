<script setup lang="ts">
import { EVENT_INFO, DAY_MINUTES } from "@/config/UIConstants";

const formatDate = (date: Date) =>
  date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

const formatHourMinute = (date: Date) =>
  date.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
  });

const addMinutes = (date: Date, minutes: number) => new Date(date.getTime() + minutes * 60 * 1000);

const today = new Date();
const limit = addMinutes(today, DAY_MINUTES);

const currentDate = `${formatDate(today)}`;
const limitDate = `${formatDate(limit)} ${formatHourMinute(limit)}`;
</script>

<template>
  <div class="mt-20 mb-2">
    <h1 class="text-4xl font-black">{{ EVENT_INFO.HEADER.TITLE }}</h1>
  </div>

  <div class="mb-2">
    <p class="text-base font-bold">기간 : {{ currentDate }} - {{ limitDate }} 까지</p>
  </div>

  <div class="mb-15">
    <p>{{ EVENT_INFO.HEADER.DESCRIPTION }}</p>
  </div>
</template>
