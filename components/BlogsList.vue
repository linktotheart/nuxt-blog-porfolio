<template>
  <section
    v-if="blogs && blogs.length"
    class="sb-component sb-component-section sb-component-featured-posts-section colors-f flex flex-col justify-center min-h-0 mt-0 mb-0 ml-0 mr-0 pt-28 pb-48 pl-4 pr-4 border-dark border-none rounded-none"
  >
    <div class="flex w-full justify-center">
      <div class="relative w-full max-w-5xl">
        <div class="text-lg sm:text-xl text-left">Featured Posts</div>
        <div class="grid gap-y-12 mt-12">
          <blog-post
            v-for="blog in blogsToShow"
            :key="blog.id"
            :details="blog"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-wrap items-center mt-10 justify-end" v-if="showSeeAll">
      <router-link
        class="sb-component sb-component-block tracking-wider sb-component-link uppercase text-lg my-2 mx-2 lg:whitespace-nowrap"
        to="/blogs"
      >
        See all posts
      </router-link>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  blogs: {
    type: Array,
    default: () => []
  },
  numberOfBlogs: {
    type: Number,
    default: 3
  },
  showSeeAll: {
    type: Boolean,
    default: true
  }
});

const blogsToShow = computed(() =>
  props.numberOfBlogs ? props?.blogs?.slice(0, props.numberOfBlogs) : props.blogs
);
</script>

<style></style>
