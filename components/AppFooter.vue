<template>
  <footer
    class="sb-component sb-component-footer bg-primary pt-32 pb-16 pr-4 pl-4 md:px-6 lg:px-8 text-primary-content"
  >
    <div class="border-t-2 border-current mx-auto max-w-6xl">
      <div class="flex flex-col md:flex-row md:flex-wrap">
        <div class="mt-6 w-full">
          <ul class="flex flex-wrap max-w-5xl text-lg">
            <li class="mr-8 mt-2">
              <router-link
                aria-label=""
                class="sb-component sb-component-block sb-component-link uppercase font-medium tracking-wider"
                to="/about"
                ><span>About</span></router-link
              >
            </li>
            <li class="mr-8 mt-2">
              <a
                href="mailto:pulkit281098@gmail.com"
                aria-label="Email Me"
                class="sb-component sb-component-block sb-component-link uppercase font-medium tracking-wider"
                ><span>Contact</span></a
              >
            </li>
            <li class="mr-8 mt-2">
              <router-link
                aria-label=""
                class="sb-component sb-component-block sb-component-link uppercase font-medium tracking-wider"
                to="/blogs/"
                ><span>Blogs</span></router-link
              >
            </li>
            <li class="mr-8 mt-2">
              <a
                href="https://github.com/linktotheart"
                aria-label="Netlify templates"
                class="sb-component sb-component-block sb-component-link uppercase font-medium tracking-wider"
                ><span>GitHub</span></a
              >
            </li>
            <li class="mr-8 mt-2">
              <a
                href="https://codepen.io/pulkit302"
                aria-label="Netlify templates"
                class="sb-component sb-component-block sb-component-link uppercase font-medium tracking-wider"
                ><span>Codepen</span></a
              >
            </li>
          </ul>
        </div>
        <div
          class="text-lg space-y-4 md:max-w-3xl md:mr-auto md:pr-12 mt-12 md:mt-32"
        >
          <p>
            <a
              class="underline hover:no-underline"
              href="tel:850-123-5021"
              aria-label="My phone number"
              >7011-587-832</a
            >
          </p>
          <p>
            <a
              class="underline hover:no-underline"
              href="mailto:pulkit281098.@gmail.com"
              aria-label="My email"
              >pulkit281098@gmail.me</a
            >
          </p>
        </div>
        <div class="mt-8 md:self-end">
          <p class="sb-markdown text-sm tracking-widest uppercase">
            Powered by
            <a class="link" href="https://www.netlify.com/">Netlify</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {};
  }
};
</script>
