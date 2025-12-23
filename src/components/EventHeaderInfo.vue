<script setup lang="ts">
const props = defineProps<{
  title: string;
  endDate: string;
  description: string;
}>();

if (!props) alert("제목, 상세설명, 날짜가 조회되지 않습니다.");

const formatDate = (date: Date) =>
  date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

const formatLimitDate = (date: Date) =>
  date.toLocaleTimeString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

const today = new Date();

const currentDate = `${formatDate(today)}`;
const limitDate = formatLimitDate(new Date(props.endDate));
</script>

<template>
  <div class="mt-20 mb-2">
    <h1 class="text-4xl font-black">{{ title }}</h1>
  </div>

  <div class="mb-2">
    <p class="text-base font-bold">기간 : {{ currentDate }} - {{ limitDate }} 까지</p>
  </div>

  <div class="mb-15">
    <p>{{ description }}</p>
  </div>
</template>
