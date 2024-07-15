<template>
  <main class="w-100 flex flex-col h-screen bg-primary overflow-hidden">
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
