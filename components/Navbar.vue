<template>
  <header class="sb-component sticky top-0 text-primary-content sb-component-header z-10 border-b border-current"
    :class="menuShown ? '' : 'backdrop-blur backdrop-filter-lg '">
    <div class="mx-auto relative max-w-full">
      <a href="#main" class="sr-only">Skip to main content</a>
      <div class="flex items-stretch relative">
        <div class="border-r border-current flex items-center">
          <router-link class="sb-header-logo flex items-center h-full p-4" to="/"><span
              class="text-base tracking-widest uppercase">Pulkit Singh</span></router-link>
        </div>
        <ul class="hidden lg:flex ml-auto border-l border-current divide-x divide-current">
          <li class="inline-flex items-stretch" v-for="nav in navLinks" :key="nav.name">
            <router-link
              class="sb-component sb-component-block sb-component-link sb-component-link-fill p-4 font-normal text-base tracking-widest uppercase"
              :to="nav.url"><span>{{ nav.name }}</span></router-link>
          </li>
        </ul>
        <ul class="hidden lg:flex border-l border-current divide-x divide-current">
          <li class="inline-flex items-stretch" v-for="social in socialLinks" :key="social.name">
            <a :href="social.url" :aria-label="social.label" target="_blank"
              class="sb-component sb-component-block sb-component-social sb-component-social-fill text-base px-5 items-center flex"><span
                class="sr-only">{{social.label}}</span>
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </li>
        </ul>
        <div class="ml-auto lg:hidden">
          <button aria-label="Open Menu" class="border-l border-current h-10 min-h-full p-4 focus:outline-none"
            @click="togglemenu">
            <span class="sr-only">Open Menu</span>
            <svg class="fill-current h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z">
              </path>
            </svg>
          </button>

          <!-- //mobile menu  -->
          <Transition mode="out-in">
            <div class="bg-primary fixed inset-0 overflow-y-auto z-20" ref="menu" v-if="menuShown">
              <div class="flex flex-col min-h-full">
                <div class="border-b border-current flex items-stretch justify-between">
                  <div class="border-r border-current flex items-center">
                    <router-link class="sb-header-logo flex items-center h-full p-4" to="/"><span
                        class="text-base tracking-widest uppercase">Pulkit Singh</span></router-link>
                  </div>
                  <div class="border-l border-current">
                    <button aria-label="Close Menu" class="h-10 min-h-full p-4 focus:outline-none" @click="togglemenu">
                      <svg class="fill-current h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="menu-list flex flex-col justify-center grow px-4 py-20 space-y-12">
                  <ul class="space-y-6">
                    <li class="text-center w-full" v-for="nav in navLinks" :key="nav.name">
                      <router-link @click.native="menuShown = false"
                        class="sb-component sb-component-block sb-component-link text-xl font-normal tracking-widest uppercase"
                        :to="nav.url"><span>{{ nav.name }}</span></router-link>
                    </li>
                  </ul>
                  <ul class="flex flex-wrap justify-center">
                    <li class="border border-current -ml-px -mt-px" v-for="social in socialLinks" :key="social.name">
                      <a :href="social.url" :aria-label="social.name" target="_blank" 
                        class="sb-component sb-component-block sb-component-social sb-component-social-fill text-base p-4 flex">
                        <span class="sr-only">
                          {{social.label}}
                        </span>
                        <Icon class="w-5 h-5" :name="social.icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Transition>
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
<script>
import { socialLinks, navLinks } from "@/data.js"

export default {
  name: "Appheader",
  data() {
    return {
      menuShown: false,
      socialLinks,
      navLinks
    }
  },
  methods: {
    togglemenu() {
      this.menuShown = !this.menuShown
    }
  }
};
</script>
