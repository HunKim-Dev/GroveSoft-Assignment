<script setup lang="ts"></script>

<template>
  <div class="grid gap-2">
    <h2 class="text-2xl mb-2 font-semibold">혜택 항목</h2>
    <ul class="flex flex-col items-start gap-2.5">
      <li
        class="benefit-hover hover:bg-black hover:text-white hover:font-medium hover:scale-[1.25]"
      >
        🎁 첫 구매 10% 할인 쿠폰 지급
      </li>
      <li
        class="benefit-hover hover:bg-black hover:text-white hover:font-medium hover:scale-[1.25]"
      >
        🎁 무료 배송 혜택
      </li>
      <li
        class="benefit-hover hover:bg-black hover:text-white hover:font-medium hover:scale-[1.25]"
      >
        🎁 신규 가입 웰컴 포인트 5,000P
      </li>
      <li
        class="benefit-hover hover:bg-black hover:text-white hover:font-medium hover:scale-[1.25]"
      >
        🎁 추첨을 통한 커피 기프티콘 증정
      </li>
      <li
        class="benefit-hover hover:bg-black hover:text-white hover:font-medium hover:scale-[1.25]"
      >
        🎁 친구에게 공유하면 추가 응모 1회 제공
      </li>
    </ul>
  </div>
</template>

<style scoped>
.benefit-hover {
  padding-inline: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 300ms;
}
</style>
