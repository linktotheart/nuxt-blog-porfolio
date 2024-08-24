<template>
  <a class="sb-post-feed-item block group" :href="`/blogs/${details.slug}`"
    ><article class="border-b border-current pb-10 md:pb-12 md:px-4">
      <div class="md:flex md:items-center">
        <div class="md:grow md:ml-12">
          <div class="mb-3 font-mono flex  text-base items-center gap-x-6">
            <time datetime="2024-06-03 00:00:00"> {{ details.readable_publish_date }}</time>
            •
            <span class="text-opacity-65">  {{  details.reading_time_minutes }} mins read </span>
          </div>
          <h3 class="text-3xl uppercase font-bold md:text-4xl">
            {{ details.title }}
          </h3>
          <p class="text-lg mt-5">
            {{ details.description }}
          </p>
        </div>
        <div class="mt-8 md:mt-0 md:mx-8">
          <button-circle />
        </div>
      </div></article
  ></a>
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
