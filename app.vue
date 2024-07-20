<template>
  <nuxt-layout>
    <div class="mx-auto text-primary-content mb-0 px-4 max-w-6xl pt-16">
      <nuxt-page />
    </div>
  </nuxt-layout>
</template>
<style>
body {
  font-family: "Space Mono", monospace;
}
.page-enter-active,
.page-leave-active {
  @apply transition-all duration-300
}
.page-enter-from,
.page-leave-to {
  @apply opacity-0 translate-y-10 transform;
}

::-webkit-scrollbar-track
{
	@apply bg-white bg-opacity-20
}

::-webkit-scrollbar
{
  @apply w-2.5;
  @apply bg-primary
}

::-webkit-scrollbar-thumb
{
  @apply bg-white bg-opacity-50 border
  
}


</style>
