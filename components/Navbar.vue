<template>
  <header
    class="sb-component text-primary-content sb-component-header relative z-4 border-b border-current"
  >
    <div class="mx-auto max-w-full">
      <a href="#main" class="sr-only">Skip to main content</a>
      <div class="flex items-stretch relative">
        <div class="border-r border-current flex items-center">
          <a class="sb-header-logo flex items-center h-full p-4" href="/"
            ><span class="text-base tracking-widest uppercase"
              >Pulkit Singh</span
            ></a
          >
        </div>
        <ul class="hidden lg:flex border-l border-current ml-auto">
          <li class="inline-flex items-stretch">
            <a
              href="https://twitter.com/netlify"
              aria-label="Twitter"
              class="sb-component sb-component-block sb-component-social sb-component-social-fill text-base p-4"
              ><span class="sr-only">Twitter</span
              ><svg
                class="fill-current h-5 w-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.953 4.57c-0.822 0.372-1.776 0.645-2.776 0.77l-0.049 0.005c1.016-0.618 1.78-1.564 2.153-2.688l0.010-0.035c-0.951 0.555-2.005 0.959-3.127 1.184-0.9-0.961-2.177-1.56-3.594-1.56-2.717 0-4.92 2.203-4.92 4.92 0 0.398 0.047 0.785 0.136 1.155l-0.007-0.034c-4.090-0.193-7.713-2.158-10.14-5.126-0.419 0.7-0.666 1.544-0.666 2.445 0 0.010 0 0.021 0 0.031v-0.002c0 1.71 0.87 3.213 2.188 4.096-0.822-0.027-1.586-0.252-2.252-0.629l0.024 0.013v0.060c0 0.001 0 0.001 0 0.002 0 2.373 1.679 4.354 3.914 4.82l0.032 0.006c-0.388 0.108-0.833 0.17-1.293 0.17-0.325 0-0.643-0.031-0.95-0.090l0.031 0.005c0.651 1.971 2.458 3.375 4.599 3.417l0.005 0c-1.66 1.312-3.783 2.105-6.092 2.105-0.004 0-0.007 0-0.011 0h0.001c-0.39 0-0.779-0.023-1.17-0.067 2.134 1.385 4.744 2.209 7.547 2.209 0.004 0 0.007 0 0.011 0h-0.001c9.053 0 13.998-7.496 13.998-13.985 0-0.21 0-0.42-0.015-0.63 0.97-0.703 1.786-1.548 2.438-2.513l0.022-0.035z"
                ></path></svg
            ></a>
          </li>
          <li class="inline-flex items-stretch">
            <a
              href="https://github.com/netlify-templates"
              aria-label="GitHub"
              class="sb-component sb-component-block sb-component-social sb-component-social-fill text-base p-4"
              ><span class="sr-only">GitHub</span
              ><svg
                class="fill-current h-5 w-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.010-1.040-0.015-2.040-3.338 0.724-4.042-1.61-4.042-1.61-0.546-1.385-1.335-1.755-1.335-1.755-1.087-0.744 0.084-0.729 0.084-0.729 1.205 0.084 1.838 1.236 1.838 1.236 1.070 1.835 2.809 1.305 3.495 0.998 0.108-0.776 0.417-1.305 0.76-1.605-2.665-0.3-5.466-1.332-5.466-5.93 0-1.31 0.465-2.38 1.235-3.22-0.135-0.303-0.54-1.523 0.105-3.176 0 0 1.005-0.322 3.3 1.23 0.96-0.267 1.98-0.399 3-0.405 1.020 0.006 2.040 0.138 3 0.405 2.28-1.552 3.285-1.23 3.285-1.23 0.645 1.653 0.24 2.873 0.12 3.176 0.765 0.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92 0.42 0.36 0.81 1.096 0.81 2.22 0 1.606-0.015 2.896-0.015 3.286 0 0.315 0.21 0.69 0.825 0.57 4.801-1.574 8.236-6.074 8.236-11.369 0-6.627-5.373-12-12-12z"
                ></path></svg
            ></a>
          </li>
        </ul>
        <ul
          class="hidden lg:flex border-l border-current divide-x divide-current"
        >
          <li class="inline-flex items-stretch">
            <a
              class="sb-component sb-component-block sb-component-link sb-component-link-fill p-4 font-normal text-base tracking-widest uppercase"
              href="/info/"
              ><span>Info</span></a
            >
          </li>
          <li class="inline-flex items-stretch">
            <a
              class="sb-component sb-component-block sb-component-link sb-component-link-fill p-4 font-normal text-base tracking-widest uppercase"
              href="/projects/"
              ><span>Projects</span></a
            >
          </li>
          <li class="inline-flex items-stretch">
            <a
              class="sb-component sb-component-block sb-component-link sb-component-link-fill p-4 font-normal text-base tracking-widest uppercase"
              href="/blog/"
              ><span>Blog</span></a
            >
          </li>
        </ul>
        <div class="ml-auto lg:hidden">
          <button
            aria-label="Open Menu"
            class="border-l border-current h-10 min-h-full p-4 focus:outline-none"
            @click="togglemenu"
          >
            <span class="sr-only">Open Menu</span>
            <svg
              class="fill-current h-6 w-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"
              ></path>
            </svg>
          </button>
          <div
            class="bg-primary fixed inset-0 overflow-y-auto z-20 hidden"
            ref="menu"
          >
            <div class="flex flex-col min-h-full">
              <div
                class="border-b border-current flex items-stretch justify-between"
              >
                <div class="border-r border-current flex items-center">
                  <a
                    class="sb-header-logo flex items-center h-full p-4"
                    href="/"
                    ><span class="text-base tracking-widest uppercase"
                      >Pulkit Singh</span
                    ></a
                  >
                </div>
                <div class="border-l border-current">
                  <button
                    aria-label="Close Menu"
                    class="h-10 min-h-full p-4 focus:outline-none"
                    @click="togglemenu"
                  >
                    <svg
                      class="fill-current h-6 w-6"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div
                class="flex flex-col justify-center grow px-4 py-20 space-y-12"
              >
                <ul class="space-y-6">
                  <li class="text-center w-full">
                    <a
                      class="sb-component sb-component-block sb-component-link text-xl font-normal text-base tracking-widest uppercase"
                      href="/info/"
                      ><span>Info</span></a
                    >
                  </li>
                  <li class="text-center w-full">
                    <a
                      class="sb-component sb-component-block sb-component-link text-xl font-normal text-base tracking-widest uppercase"
                      href="/projects/"
                      ><span>Projects</span></a
                    >
                  </li>
                  <li class="text-center w-full">
                    <a
                      class="sb-component sb-component-block sb-component-link text-xl font-normal text-base tracking-widest uppercase"
                      href="/blog/"
                      ><span>Blog</span></a
                    >
                  </li>
                </ul>
                <ul class="flex flex-wrap justify-center">
                  <li class="border border-current -ml-px -mt-px">
                    <a
                      href="https://twitter.com/netlify"
                      aria-label="Twitter"
                      class="sb-component sb-component-block sb-component-social sb-component-social-fill text-base p-4 flex"
                    >
                      <span class="sr-only">Twitter</span>
                      <Icon class="w-5 h-5" name="mdi:twitter" />
                    </a>
                  </li>
                  <li class="border border-current -ml-px -mt-px">
                    <a
                      href="https://github.com/netlify-templates"
                      aria-label="GitHub"
                      class="sb-component sb-component-block sb-component-social sb-component-social-fill text-base p-4 flex"
                      ><span class="sr-only">GitHub</span
                      ><Icon name="mdi:github" class="w-5 h-5"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style>
.sb-component-link-fill,
.sb-component-social-fill,
.sb-header-logo {
  position: relative;
  overflow: hidden;
  transition: color 0.25s ease-in-out;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  z-index: 1;
}
.sb-component-link-fill:before,
.sb-component-social-fill:before,
.sb-header-logo:before {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  opacity: 0;
  content: "";
  z-index: -1;
  transform: translate3d(0, -100%, 0);
  transform-origin: 0 100%;
  transition: transform 0.25s, opacity 0.25s;
  width: 101%;
}
.sb-component-link-fill:hover,
.sb-component-social-fill:hover,
.sb-header-logo:hover {
  --tw-text-opacity: 1;
  color: rgb(8 4 246 / var(--tw-text-opacity));
}
.sb-component-link-fill:before,
.sb-component-social-fill:before,
.sb-header-logo:before {
  @apply bg-opacity-100;
  background-color: rgb(251 255 242 / var(--tw-bg-opacity));
}
.sb-component-link-fill:hover:before,
.sb-component-social-fill:hover:before,
.sb-header-logo:hover:before {
  opacity: 1;
  transform: translateZ(0);
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.sb-component-link:not(.sb-component-link-fill) {
  box-shadow: 0 1px 0 0 currentColor;
  transition: box-shadow 0.25s ease-in-out;
}
.group:hover .sb-component-link:not(.sb-component-link-fill),
.sb-component-link:not(.sb-component-link-fill):hover {
  box-shadow: 0 5px 0 0 currentColor;
}
.sb-component-link-fill,
.sb-component-social-fill,
.sb-header-logo {
  position: relative;
  overflow: hidden;
  transition: color 0.25s ease-in-out;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  z-index: 1;
}
</style>
<script>
export default {
  name: "Appheader",
  methods: {
    togglemenu() {
      this.$refs?.["menu"].classList.toggle("hidden");
    }
  }
};
</script>
