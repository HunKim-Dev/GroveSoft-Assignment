<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { APPLY } from "@/config/UIConstants";
import { API_MESSAGES } from "@/config/apiMessages";
import { applicationForm } from "@/lib/validators/applicationForm";

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

const errorMessage = ref("");
const isLoading = ref(false);

const submitForm = async () => {
  const validateResult = applicationForm.safeParse({
    name: inputNameText.value,
    phone: inputPhoneNumberText.value,
    email: inputEmailText.value,
    agreedTerms: agreeCheck.value,
  });

  if (!validateResult.success) {
    errorMessage.value = validateResult.error.issues[0]?.message ?? "입력값을 확인해주세요.";

    alert(errorMessage.value);
    return;
  }

  try {
    isLoading.value = true;

    const response = await fetch("https://694a57351282f890d2d85e1d.mockapi.io/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validateResult.data),
    });

    if (!response) throw new Error(API_MESSAGES.FAIL.POST);

    alert(API_MESSAGES.SUCCESS.POST);
    closeModel("close");
  } catch (error) {
    alert(API_MESSAGES.FAIL.SERVER);
    console.error({ message: error });
  } finally {
    isLoading.value = false;
  }
};

const copyUrl = async () => {
  try {
    const currentUrl = window.location.href;
    await navigator.clipboard.writeText(currentUrl);

    alert("링크가 복사되었습니다!");
  } catch (error) {
    alert("링크 복사에 실패했습니다.");
    console.error({ message: error });
  }
};
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
        class="absolute right-4 top-4 text-gray-400 transition hover:text-gray-700 active:scale-90"
      >
        ✕
      </button>

      <h3 class="text-xl font-semibold mb-6">{{ APPLY.FORM_TITLE }}</h3>

      <div class="space-y-5">
        <div class="space-y-2">
          <p class="text-sm font-medium">{{ APPLY.FORM_NAME }}</p>
          <input
            v-model.trim="inputNameText"
            type="text"
            placeholder="이름 입력해주세요."
            class="input-base"
          />
        </div>

        <div class="space-y-2">
          <p class="text-sm font-medium">{{ APPLY.FORM_PHONE_NUMBER }}</p>
          <input
            v-model.trim="inputPhoneNumberText"
            type="text"
            placeholder="010-1234-1234"
            class="input-base"
          />
        </div>

        <div class="space-y-2">
          <p class="text-sm font-medium">{{ APPLY.FORM_EMAIL }}</p>
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
            {{ APPLY.FORM_AGREE_LABEL }}
          </label>
        </div>

        <div class="flex gap-3 pt-2">
          <button
            @click="submitForm"
            class="flex-1 cursor-pointer rounded-md bg-[#007AFF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0066d6] active:scale-90"
          >
            {{ isLoading ? APPLY.APPLYING : APPLY.BUTTON }}
          </button>
          <button
            @click="copyUrl"
            class="flex-1 cursor-pointer rounded-md border border-gray bg-white px-4 py-2 text-sm font-semibold text-gray transition hover:bg-gray-100 active:scale-90"
          >
            {{ APPLY.SHARE_BUTTON }}
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
