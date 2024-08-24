<template>
  <section>
    <HeroSection />
    <h2 class="text-lg sm:text-xl text-left">Projects</h2>
    <ProjectGrid :projects="projects" />
    {{ loading }}
    <BlogsList :loading="loading" v-if="!loading" :blogs="blogs" :numberOfBlogs="5"  />
    <Loader v-else />
    <ContactForm />
  </section>
</template>
<script setup>
const projects = await queryContent('/projects').find()

const { data, loading } = useFetch('https://dev.to/api/articles?username=pulkitsingh')
console.log(loading)
const blogs = data

</script>