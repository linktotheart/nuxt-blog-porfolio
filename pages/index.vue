<template>
  <section>
    <HeroSection />
    <h2 class="text-lg sm:text-xl text-left">Projects</h2>
    <ProjectGrid :projects="projects" />

    <BlogsList :loading="loading" v-if="!loading" :blogs="blogs" :numberOfBlogs="5"  />
    
    <Loader v-else />
    
    <ContactForm />
  </section>
</template>
<script setup>
const projects = await queryContent('/projects').find()
const isLoading = ref(true)
const { data, loading } = await useFetchBlogs('https://dev.to/api/articles?username=pulkitsingh')
isLoading.value = loading.value
const blogs = data

</script>