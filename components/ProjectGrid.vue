<template>
  <div class="grid gap-y-12 md:grid-cols-3 gap-x-6 lg:gap-x-8 mt-12">
    <ProjectCard v-for="project in projects" :key="project.title" :details="project" />
  </div>
  <div class="flex flex-wrap items-center mt-10 justify-end" v-if="showSeeAll">
    <a
      class="sb-component sb-component-block tracking-wider sb-component-link uppercase text-lg my-2 mx-2 lg:whitespace-nowrap"
      href="/projects/"
      >See all projects
    </a>
  </div>
</template>

<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  },
  showSeeAll: {
    type: Boolean,
    default: true
  }
});
</script>

<style></style>
