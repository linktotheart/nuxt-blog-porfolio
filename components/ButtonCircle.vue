<template>
  <span
    class="p-4 rounded-full btn-lg min-h-4 h-14 w-14 text-primary-content hover:border-primary-content group-hover:border-primary-content hover:bg-transparent text-current group-hover:bg-transparent group-hover:shadow-md btn-circle border-2 duration-200 border-primary-content btn-outline flex items-center justify-center shadow-none"
    ><span class="sr-only">Read more</span
    ><Icon name="mdi:arrow-top-right" class="text-3xl" />
  </span>
</template>

<script>
export default {};
</script>

<style>
.group:hover .btn-lg,
.btn-lg:hover {
  transform: translate(6px, -6px);
  box-shadow: 0 6px 0 0 currentColor;
}
</style>
