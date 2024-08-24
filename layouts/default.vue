<template>
  <main class="w-100 flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </main>
</template>
<script setup>
//  set head title
useHead({
  title: "Pulkit | journal",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "bg-primary"
  },
});
</script>
