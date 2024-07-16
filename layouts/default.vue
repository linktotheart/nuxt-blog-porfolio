<template>
  <main class="w-100 flex flex-col min-h-screen bg-primary">
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </main>
</template>
<script>
export default {
  head: {},
};
</script>
