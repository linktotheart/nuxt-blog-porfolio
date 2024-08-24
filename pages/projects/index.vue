<template>
  <h1>Projects</h1>
</template>
<script setup>
const data = await queryContent('/projects').find()
</script>
