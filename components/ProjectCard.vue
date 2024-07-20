<template>
  <a class="sb-project-feed-item block group" href="/projects/project-two/"
    ><article class="border-b border-current pb-10 max-w-3xl">
      <div class="h-0 w-full mb-6 pt-2/3 relative overflow-hidden">
        <img
          class="sb-component sb-component-block sb-component-image-block absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src="https://picsum.photos/200/300"
          alt="Project thumbnail image"
        />
      </div>
      <h3 class="uppercase font-bold tracking-wide text-2xl md:text-3xl">Another cool project</h3>
      <p class="text-lg mt-5 line-clamp-3">
        It’s hard to imagine that I’ve that I wrote all this code by myself,
        probably because I worked with an entire team :) but they definitely
        followed my lead most of the time.
      </p>
      <div class="mt-8">
        <button-circle />
      </div></article
  ></a>
</template>

<script>
import ButtonCircle from './ButtonCircle.vue';
export default {
	components: { ButtonCircle },};
</script>

<style></style>
