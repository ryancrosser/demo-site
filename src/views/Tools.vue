<template>
  <div class="container mx-auto pt-4">
    <ToolNavbar :categories="categories" />
    <!-- {{categories}} -->
    <FlagshipToolContainer :tools="flagshipTools" :category="'Flagship'" />
    <ToolContainer v-for="(category, name) in categories" :key="name" :tools="tools" :categoryName="name" :category="category" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ToolNavbar from '@components/ToolNavbar';
import FlagshipToolContainer from '@components/FlagshipToolContainer';
import ToolContainer from '@components/ToolContainer';
export default {
  components: {
    FlagshipToolContainer,
    ToolContainer,
    ToolNavbar
  },
  mounted() {
    this.$store.dispatch('getToolData');
  },
  computed: {
    ...mapGetters(['tools', 'flagshipTools', 'categories'])
  }
};
</script>
