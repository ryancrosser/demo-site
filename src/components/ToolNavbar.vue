<template>
  <div>
    <nav class="flex">
      <div class="w-full flex-grow flex items-center w-auto">
        <div class="flex-grow text-center">
          <router-link v-for="(category, name) in categories" :key="name" :to="`#${kebob(name)}`" class="block inline-block mt-0 text-gray-800 700 text-base hover:text-black mr-8">{{
            name
          }}</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import kebobCase from 'lodash/kebabCase';

export default {
  computed: {
    kebob() {
      return kebobCase;
    }
  },
  props: {
    categories: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped></style>
