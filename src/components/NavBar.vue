<template>
  <!-- :class="{ 'hidden-navbar': !showNavbar }" -->
  <nav class="flex items-center justify-between flex-wrap bg-white min-h-full h-16 px-4 shadow">
    <div class="flex items-center flex-shrink-0 text-black pr-24">
      <router-link to="/" class="font-semibold text-xl tracking-tight">{{ appConfig.siteTitle }}</router-link>
    </div>
    <div class="block lg:hidden">
      <button @click="toggleMenu" class="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-black hover:border-black">
        <svg class="fill-current h-3 w-3" vi ewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div :class="{ block: isOpen, hidden: !isOpen }" class="w-full flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="lg:flex-grow">
        <router-link to="/teams" class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 text-lg hover:text-black mr-8">Our Teams</router-link>
        <router-link to="/tools" class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 text-lg hover:text-black mr-8">Our Tools</router-link>
        <router-link to="/knowledge" class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 text-lg hover:text-black mr-8">Knowledge</router-link>
        <router-link to="/help" class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 text-lg hover:text-black mr-8">Help</router-link>
      </div>
      <div>
        <template v-if="!isLoggedIn">
          <router-link to="/admin-login" class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 text-lg hover:text-black mr-8">Admin Login</router-link>
        </template>
        <template v-else>
          <a @click="logOut" class="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-gray-800 text-lg hover:text-black mr-8">Log Out</a>
        </template>
      </div>
      <div class="items-center">
        <a href="#" class="inline-block pr-2">
          <img src="https://place-hold.it/50x50/555/555" alt class="rounded-full" />
        </a>
        <a href="#" class="inline-block text-sm leading-none border text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0">
          <img src="https://place-hold.it/50x50/000/000" alt class="rounded-full" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import appConfig from '../app.config';
const OFFSET = 0;
export default {
  data() {
    return {
      appConfig,
      isOpen: false,
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    };
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', this.onScroll);
    const viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=1';
    document.head.appendChild(viewportMeta);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
    logOut() {
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.25s all ease-out;
}
.hidden-navbar {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.1s all ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
