<template>
  <div class="h- w-full md:w-1/2 lg:w-1/3 text-center" style="min-width:330px">
    <div class="overflow-hidden text-center">
      <a :href="tool.link">
        <img class="h-24 rounded-full mt-8 mx-auto" :src="tool.imageUrl" :alt="tool.name + 'Icon'" />
        <div class="px-6 pt-4">
          <h4 class="text-3xl text-gray-700">{{ tool.name }}</h4>
          <div class="h-24 my-2">
            <p class="text-gray-600 text-lg">{{ tool.description }}</p>
          </div>
        </div>
        <div class="px-6 pb-8">
          <span class="text-sm">
            <a :href="tool.helpGuideLink" class="font-bold text-blue-700 hover:underline">Learn More</a>
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tool: {
      type: Object,
      required: true
    }
  }
};
</script>
