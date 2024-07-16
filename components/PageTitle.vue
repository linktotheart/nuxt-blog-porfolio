<template>
    <h1 class="mb-8 text-5xl lg:text-6xl">
        {{  title }}
    </h1>
</template>
<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>