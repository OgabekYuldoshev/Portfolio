<template>
  <div
    class="max-w-sm rounded overflow-hidden shadow hover:shadow-lg duration-300"
  >
    <img
      class="w-full h-64 object-cover object-center"
      :src="work.img"
      alt="Mountain"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl">{{ $t(work.name) }}</div>
    </div>
    <div class="flex gap-1">
      <div class="px-6 pb-2">
        <p class="mb-2 font-medium">{{ $t("technologies") }}:</p>
        <span
          v-for="n in work.use"
          :key="n"
          class="inline-block bg-gray-200 rounded px-2 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2"
          >#{{ n }}</span
        >
      </div>
      <div class="px-6 pb-2">
        <p class="mb-2 font-medium">{{ $t("links") }}:</p>
        <a
          v-for="l in work.links"
          :key="l"
          :href="l.link"
          class="inline-block hover:bg-blue-400 duration-300 cursor-pointer hover:text-white bg-gray-200 rounded px-2 py-1 text-sm font-semibold text-gray-700 mr-1 mb-2"
          >#{{ l.name }}</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["work"]
};
</script>
