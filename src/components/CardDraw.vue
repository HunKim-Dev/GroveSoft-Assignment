<script setup lang="ts">
import { ref } from "vue";
import { CARD_DRAW } from "@/config/UIConstants";

type Card = { id: number; front: string; drawn: boolean };

const CARDS = ref<Card[]>([
  { id: 1, front: "10%", drawn: false },
  { id: 2, front: "10%", drawn: false },
  { id: 3, front: "10%", drawn: false },
  { id: 4, front: "10%", drawn: false },
  { id: 5, front: "10%", drawn: false },
]);

const shuffleCard = () => {
  const card = CARDS.value;
  if (card.length < 2) return;

  for (let i = card.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    const temp = card[i]!;
    card[i] = card[j]!;
    card[j] = temp;
  }
};

const hasDrawn = ref(false);

const flipCard = (id: number) => {
  if (hasDrawn.value) return;

  const target = CARDS.value.find((card) => card.id === id);

  if (!target) return;

  target.drawn = true;
  hasDrawn.value = true;
};
</script>

<template>
  <div>
    <div class="mb-4">
      <p class="text-2xl">{{ CARD_DRAW.TITLE }}</p>
    </div>
  </div>

  <transition-group name="shuffle" tag="div" class="mb-10 flex flex-wrap gap-3">
    <div
      v-for="card in CARDS"
      :key="card.id"
      class="card cursor-pointer transition hover:-translate-y-3 hover:shadow-lg"
      :class="{ 'card--flipped': card.drawn }"
      @click="flipCard(card.id)"
    >
      <div class="card__inner">
        <div class="card__face card__back">?</div>
        <div class="card__face card__front">{{ card.front }}</div>
      </div>
    </div>
  </transition-group>

  <div class="flex justify-center mt-6">
    <button
      @click="shuffleCard"
      class="px-5 py-3 cursor-pointer text-sm font-semibold rounded-md border bg-[#007AFF] text-white transition hover:bg-[#004085] active:scale-90"
    >
      {{ CARD_DRAW.MIX_BUTTON }}
    </button>
  </div>
</template>

<style scoped>
.card {
  width: 75px;
  height: 100px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: transparent;
  perspective: 800px;
}

.card__inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.45s;
}

.card__face {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
}

.card__back {
  background: #001541;
  color: #ffffff;
}

.card__front {
  background: #ffffff;
  color: #111827;
  transform: rotateY(180deg);
}

.card--flipped .card__inner {
  transform: rotateY(180deg);
}

.shuffle-move {
  transition: transform 0.7s;
}
</style>
