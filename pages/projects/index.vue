<template>
  <h1>Projects</h1>

  <ProjectGrid :showSeeAll="false" :projects="data" />

  
</template>
<script setup>
const data = await queryContent('/projects').find()
</script>
