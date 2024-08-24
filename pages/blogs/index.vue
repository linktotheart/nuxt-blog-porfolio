<template>
    <loader v-if="isLoading" />
    <BlogsList :blogs="blogs" v-else :showSeeAll="false" />

</template>
<script setup>
const { data, loading } = await useFetchBlogs('https://dev.to/api/articles?username=pulkitsingh')
const blogs = data
const isLoading = ref(loading)
</script>