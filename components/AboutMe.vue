<template>
  <section class=" px-4 md:px-24 text-gray-600 body-font">
    <div class="container flex flex-wrap px-5 py-10 mx-auto items-center">
      <div
        data-aos="fade-right"
        class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200"
      >
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
        >
          {{ $t("inputAbout") }}
        </h1>
        <p class="leading-relaxed text-base">
          {{ $t("aboutMe") }}
        </p>
      </div>
      <div data-aos="fade-left" class="flex flex-col md:w-1/2 md:pl-12">
        <h2
          class="title-font font-semibold text-gray-800 tracking-wider text-base mb-3"
        >
          {{ $t("skills") }}
        </h2>
        <nav class="flex flex-wrap items-center gap-3 list-none -mb-1">
          <li v-for="s in $info.skills" :key="s.name">
            <el-tooltip
              class="item"
              effect="dark"
              :content="s.name"
              placement="top"
            >
              <img width="40" height="40" :src="s.img" alt="" />
            </el-tooltip>
          </li>
        </nav>
        <div class="md:flex grid gap-3 mt-4">
          <div class="w-full md:w-1/2">
            <label>Frontend</label>
            <el-progress :percentage="83"></el-progress>
          </div>
          <div class="w-full md:w-1/2">
            <label>Backend</label>
            <el-progress :percentage="40"></el-progress>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
