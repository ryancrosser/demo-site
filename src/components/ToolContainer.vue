<template>
  <div :id="kebob(categoryName)" class="pt-16 border-b border-gray-400">
    <h3 class="text-3xl text-center">{{ categoryName }}</h3>
    <h5 class="w-1/2 text-xl pt-4 mx-auto text-center">{{ category.description }}</h5>
    <div class="flex flex-wrap mx-auto">
      <ToolCard v-for="(tool, index) in filteredTools" :key="index" :tool="tool" />
      <div class="flex-auto flex-grow hidden lg:block p-8">
        <div class="bg-gray-300 border border-black border-dashed h-full">
          <a :href="successStory.link">
            <div v-if="successStory.html" v-html="successStory.html" class="h-full"></div>
            <template v-else-if="successStory.imageUrl">
              <img :src="successStory.imageUrl" alt="Success Story link" class="object-cover" style="height: 261px;width: 375px" />
            </template>
          </a>
        </div>
      </div>
    </div>
    <div class="h-84 w-full bg-gray-300 border border-black border-dashed block lg:hidden m-8 mx-auto">
      <div class="bg-gray-300 border border-black border-dashed h-full">
        <a :href="successStory.link">
          <div v-if="successStory.html" v-html="successStory.html"></div>
          <div v-else-if="successStory.imageUrl">
            <img :src="successStory.imageUrl" alt="Success Story link" class="mx-auto" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import kebobCase from 'lodash/kebabCase';
import ToolCard from '@/components/ToolCard';
export default {
  components: {
    ToolCard
  },
  computed: {
    kebob() {
      return kebobCase;
    },
    filteredTools() {
      return this.tools
        .filter(tool => tool.category === this.categoryName)
        .sort((a, b) => {
          if (a.category > b.category) {
            return 1;
          } else if (a.category < b.category) {
            return -1;
          } else {
            return 0;
          }
        });
    },
    successStory() {
      const randomIndex = Math.floor(Math.random() * this.category.successStories.length - 1 + 1);
      return this.category.successStories[randomIndex];
    }
  },
  props: {
    categoryName: {
      type: String,
      require: true
    },
    category: {
      type: Object,
      required: true
    },
    tools: {
      type: Array,
      required: true
    }
  }
};
</script>

<style></style>
