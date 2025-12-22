<script setup lang="ts">
import { ref } from "vue";
import { onMounted, onUnmounted } from "vue";

const inputNameText = ref("");
const inputPhoneNumberText = ref("");
const inputEmailText = ref("");
const agreeCheck = ref(false);

const closeModel = defineEmits<{ (event: "close"): void }>();

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") closeModel("close");
};

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => window.removeEventListener("keydown", onKeydown));
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    @click.self="$emit('close')"
  >
    <div class="relative w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <button
        @click="$emit('close')"
        aria-label="창 닫기"
        class="absolute right-4 top-4 text-gray-400 transition hover:text-gray-700"
      >
        ✕
      </button>

      <h3 class="text-xl font-semibold mb-6">그로브 뷰티 오픈 기념 응모</h3>

      <div class="space-y-5">
        <div class="space-y-2">
          <p class="text-sm font-medium">이름</p>
          <input
            v-model.trim="inputNameText"
            type="text"
            placeholder="이름 입력해주세요."
            class="input-base"
          />
        </div>

        <div class="space-y-2">
          <p class="text-sm font-medium">연락처</p>
          <input
            v-model.trim="inputPhoneNumberText"
            type="text"
            placeholder="01012341234 (숫자만 입력해주세요.)"
            class="input-base"
          />
        </div>

        <div class="space-y-2">
          <p class="text-sm font-medium">이메일</p>
          <input
            v-model.trim="inputEmailText"
            type="text"
            placeholder="example@mail.com"
            class="input-base"
          />
        </div>

        <div class="flex items-center gap-2">
          <input
            id="checkbox"
            type="checkbox"
            v-model="agreeCheck"
            class="h-4 w-4 rounded border-black focus:ring-[#007AFF] cursor-pointer"
          />
          <label for="checkbox" class="text-sm text-gray cursor-pointer">
            약관에 동의 하시나요?
          </label>
        </div>

        <div class="flex gap-3 pt-2">
          <button
            class="flex-1 cursor-pointer rounded-md bg-[#007AFF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0066d6]"
          >
            응모하기
          </button>
          <button
            class="flex-1 cursor-pointer rounded-md border border-gray bg-white px-4 py-2 text-sm font-semibold text-gray transition hover:bg-gray-100"
          >
            공유하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-base {
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #828282;
  padding: 0.5rem 0.75rem;
  font-size: small;
}

.input-base:focus {
  box-shadow: #828282;
  border-color: #007aff;
}
</style>
