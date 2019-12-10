<template>
  <div class="pt-16 border-b border-gray-400">
    <div class="flex flex-wrap mx-auto justify-center">
      <ToolCard v-for="(tool, index) in tools" :key="index" :tool="tool" />
    </div>
  </div>
</template>

<script>
import ToolCard from '@/components/ToolCard';
export default {
  components: {
    ToolCard
  },
  props: {
    category: {
      type: String,
      required: true
    },
    tools: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
