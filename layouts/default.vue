<template>
  <main class="w-100 flex flex-col min-h-screen bg-grad">
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
<style>
.bg-grad {
  @apply bg-primary to-primary bg-fixed bg-gradient-to-tr from-blue-800 from-5%;
}
</style>
