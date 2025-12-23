<script setup lang="ts">
import { EVENT_INFO } from "@/config/UIConstants";

const props = defineProps<{
  rewards: { id: number; name: string; image: string }[];
}>();

if (!props) alert("혜택항목이 조회가 되지 않습니다.");
</script>

<template>
  <div class="grid gap-2">
    <h2 class="text-2xl mb-2 font-semibold">{{ EVENT_INFO.REWARD.TITLE }}</h2>
    <ul class="flex flex-col items-start gap-2.5">
      <li
        v-for="reward in rewards"
        :key="reward.id"
        class="benefit-hover hover:bg-black hover:text-white hover:font-medium hover:scale-[1.25]"
      >
        {{ reward.name }}
        <img :src="reward.image" alt="보상 항목 이미지" class="w-6 h-6 object-contain" />
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
