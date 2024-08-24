<template>
  <a class="sb-project-feed-item block group" :href="details._path">
    <article class="border-b border-current pb-10 max-w-3xl">
      <div class="w-full mb-6 aspect-video relative overflow-hidden">
        <img
          class="sb-component sb-component-block sb-component-image-block absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          :src="`${details.thumbnail}`"
          alt="Project thumbnail image"
        />
      </div>
      <h3 class="uppercase font-bold tracking-wide text-2xl md:text-3xl">
        {{ details.title }}
      </h3>
      <p class="text-lg mt-5 line-clamp-3">
        {{ details.description }}
      </p>
      <div class="mt-8">
        <button-circle />
      </div>
    </article>
  </a>
</template>

<script setup>
defineProps({
  details: {
    type: Object,
    required: true
  }
});
</script>

<style></style>
