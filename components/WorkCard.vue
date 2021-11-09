<template>
  <div
    id="work-card"
    :style="'background-image: url(' + work.img + ');'"
    class="w-full h-80"
  >
    <div id="work-overflow">
      <div class="flex flex-col items-center gap-5">
        <h1 class="uppercase text-2xl font-bold">{{ work.name }}</h1>
        <div class="flex gap-2">
          <p>Used:</p>
          <span v-for="t in work.use" :key="t">{{ t }},</span>
        </div>
        <div class="flex gap-2">
          <a
            v-show="work.live"
            :href="work.live"
            class="py-2 w-24 flex items-center justify-center border-blue-500 border-2 hover:bg-blue-500 duration-300 rounded text-blue-500 hover:text-white font-bold "
            >Live</a
          >
          <a
            :href="work.code"
            class="py-2 w-24 flex items-center justify-center border-blue-500 border-2 hover:bg-blue-500 duration-300 rounded text-blue-500 hover:text-white font-bold "
            >Code</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["work"]
};
</script>

<style scoped>
#work-card {
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: start;
}
#work-overflow {
  opacity: 0;
  transition: 0.3s;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#work-card:hover > #work-overflow {
  opacity: 1;
}
</style>
