<template>
  <div class="py-8 px-4 md:px-24 ">
    <h1 data-aos="fade-right" class="uppercase text-xl font-bold mb-5">
      {{ $t("works") }}
    </h1>
    <div class="flex flex-wrap justify-center gap-10">
      <WorkCard :work="work" v-for="work in $info.works" :key="work.name" />
    </div>
  </div>
</template>
