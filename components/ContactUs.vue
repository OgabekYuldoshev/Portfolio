<template>
  <section class="md:px-24 px-4 text-gray-600 body-font relative">
    <h1
      data-aos="fade-right"
      class="text-xl text-black font-bold uppercase mt-5"
    >
      {{ $t("contacts") }}
    </h1>
    <!-- <div
      class="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap"
    > -->
    <div
      class="w-full bg-gray-300 rounded-lg overflow-hidden my-5 p-10 flex items-end justify-start relative"
    >
      <iframe
        width="100%"
        height="100%"
        class="absolute inset-0"
        frameborder="0"
        title="map"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Uzbekistan,%20Samarkand&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
        style="filter: grayscale(1) contrast(1.2) opacity(0.7);"
      ></iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2
            class="title-font font-semibold text-gray-900 tracking-widest text-xs"
          >
            {{ $t("addres") }}
          </h2>
          <p class="mt-1">
            {{ $t("location") }}
          </p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2
            class="title-font font-semibold text-gray-900 tracking-widest text-xs"
          >
            {{ $t("email") }}
          </h2>
          <a class="text-indigo-500 leading-relaxed">{{ $info.user.email }}</a>
          <h2
            class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4"
          >
            {{ $t("phone") }}
          </h2>
          <p class="leading-relaxed">{{ $info.user.phone }}</p>
        </div>
      </div>
    </div>
    <!-- <div
        class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          {{ $t("feedback") }}
        </h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          {{ $t("feedbacktoptext") }}
        </p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600">{{
            $t("inputname")
          }}</label>
          <input
          v-model="name"
          required
            type="text"
            id="name"
            name="name"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">{{
            $t("email")
          }}</label>
          <input
          v-model="email"
          required
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">{{
            $t("message")
          }}</label>
          <textarea
            id="message"
            v-model="message"
            required
            name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
        @click="send()"
          class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {{ $t("send") }}
        </button>
        <p class="text-xs text-center text-gray-500 mt-3">
          {{ $t("feedbackbottomtext") }}
        </p>
      </div> -->
    <!-- </div> -->
  </section>
</template>

<script>
export default {
  data: () => ({
    name: "",
    email: "",
    message: ""
  }),
  methods: {
    send() {
      this.$mail
        .send({
          from: this.email,
          subject: `Message from ${this.name} `,
          text: this.message
        })
        .then(() => alert("Success"));
    }
  }
};
</script>
