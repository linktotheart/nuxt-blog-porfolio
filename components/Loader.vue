<template>
  <div
    role="status"
    class="animate-pulse max-w-xl mb-8 lg:mb-10"
    v-for="i in numberOfCards"
    :key="i"
  >
    <div
      class="h-4 bg-white rounded-full opacity-20 dark:bg-white max-w-[640px] mb-4"
    ></div>
    <div
      class="h-3 bg-white rounded-full opacity-20 mb-4 dark:bg-white max-w-[540px]"
    ></div>
	<div
      class="h-3 bg-white rounded-full opacity-20 dark:bg-white max-w-[540px]"
    ></div>
    <div class="flex justify-start opacity-20 mt-4">
      <div class="w-20 h-3 bg-white rounded-full dark:bg-white me-3"></div>
      <div class="w-24 h-3 bg-white rounded-full dark:bg-white"></div>
    </div>
    <span class="sr-only">Loading...</span>
  </div>
</template>
<script setup>
const props = defineProps({
  numberOfCards: {
    type: Number,
    default: 3
  }
});
</script>
