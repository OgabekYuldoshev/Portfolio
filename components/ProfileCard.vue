<template>
  <div
    class="
      relative
      font-sans
      antialiased
      text-gray-900
      bg-center
      leading-normal
      tracking-wider
      bg-cover
    "
    style="
      background-image: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    "
  >
    <div
      class="
        absolute
        top-3
        left-5
        flex
        gap-1
        flex
        items-center
        text-gray-300 text-xs
      "
    >
      <span>{{ $t("visitors") }}:</span>
      <span>{{ visited }}</span>
    </div>
    <div class="absolute top-3 right-5 flex gap-3">
      <!-- <el-select v-model="$i18n.locale" placeholder="Select Language">
        <el-option
          v-for="lang in $i18n.locales"
          :key="lang.code"
          :value="lang.code"
          :label="lang.name"
        >
        </el-option>
      </el-select> -->
      <span
        v-for="lang in $i18n.locales"
        :key="lang.code"
        :class="`${
          $i18n.locale === lang.code ? 'text-white' : 'text-gray-500'
        } uppercase cursor-pointer text-medium`"
        @click="$i18n.locale = lang.code"
      >
        {{ lang.code }}
      </span>
    </div>
    <div
      class="
        max-w-4xl
        flex
        items-center
        h-auto
        lg:h-screen
        flex-wrap
        mx-auto
        py-24
        lg:py-0
      "
    >
      <!--Main Col-->
      <div
        id="profile"
        class="
          w-full
          lg:w-3/5
          rounded-lg
          lg:rounded-l-lg lg:rounded-r-none
          shadow-2xl
          bg-white
          opacity-90
          mx-6
          lg:mx-0
        "
      >
        <div class="p-4 md:p-12 text-center lg:text-left">
          <!-- Image for mobile view-->
          <div
            class="
              block
              lg:hidden
              rounded-full
              shadow-xl
              mx-auto
              -mt-16
              h-48
              w-48
              bg-cover bg-center
            "
            :style="`background-image: url('/ogabek.jpg')`"
          ></div>

          <h1 class="text-3xl font-bold pt-8 lg:pt-0">{{ $t("name") }}</h1>
          <div
            class="
              mx-auto
              lg:mx-0
              w-4/5
              pt-3
              border-b-2 border-green-500
              opacity-25
            "
          ></div>
          <p
            class="
              pt-4
              text-base
              font-bold
              flex
              items-center
              justify-center
              lg:justify-start
            "
          >
            <svg
              class="h-4 fill-current text-green-700 pr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
              />
            </svg>
            {{ $t("position") }}
          </p>
          <p
            class="
              pt-2
              text-gray-600 text-xs
              lg:text-sm
              flex
              items-center
              justify-center
              lg:justify-start
            "
          >
            <svg
              class="h-4 fill-current text-green-700 pr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"
              />
            </svg>
            {{ $t("inputLocation") }} - {{ $t("location") }}
          </p>
          <p class="pt-8 text-sm italic">
            &#171; {{ $t("motivation") }} &#187;
          </p>

          <div class="pt-8 pb-4">
            <a
              :href="$info.links.telegram"
              class="
                bg-green-700
                hover:bg-green-900
                text-white
                font-bold
                py-2
                px-4
                rounded-full
              "
            >
              {{ $t("contactme") }}
            </a>
          </div>

          <div
            class="
              mt-6
              pb-16
              lg:pb-0
              w-4/5
              lg:w-full
              mx-auto
              flex flex-wrap
              items-center
              justify-between
            "
          >
            <a
              class="link"
              :href="$info.links.facebook"
              data-tippy-content="@OgabekYuldoshev"
              ><svg
                class="h-6 fill-current text-gray-600 hover:text-green-700"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path
                  d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"
                /></svg
            ></a>
            <a
              class="link"
              :href="$info.links.telegram"
              data-tippy-content="@anonymcooder"
              ><svg
                class="h-6 fill-current text-gray-600 hover:text-green-700"
                role="img"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                xmlns:serif="http://www.serif.com/"
                style="
                  fill-rule: evenodd;
                  clip-rule: evenodd;
                  stroke-linejoin: round;
                  stroke-miterlimit: 1.41421;
                "
              >
                <title>Telegram</title>
                <path
                  id="telegram-3"
                  d="M19,24l-14,0c-2.761,0 -5,-2.239 -5,-5l0,-14c0,-2.761 2.239,-5 5,-5l14,0c2.762,0 5,2.239 5,5l0,14c0,2.761 -2.238,5 -5,5Zm-2.744,-5.148c0.215,0.153 0.491,0.191 0.738,0.097c0.246,-0.093 0.428,-0.304 0.483,-0.56c0.579,-2.722 1.985,-9.614 2.512,-12.09c0.039,-0.187 -0.027,-0.381 -0.173,-0.506c-0.147,-0.124 -0.351,-0.16 -0.532,-0.093c-2.795,1.034 -11.404,4.264 -14.923,5.567c-0.223,0.082 -0.368,0.297 -0.361,0.533c0.008,0.235 0.167,0.44 0.395,0.509c1.578,0.471 3.65,1.128 3.65,1.128c0,0 0.967,2.924 1.472,4.41c0.063,0.187 0.21,0.334 0.402,0.384c0.193,0.05 0.397,-0.002 0.541,-0.138c0.811,-0.765 2.064,-1.948 2.064,-1.948c0,0 2.381,1.746 3.732,2.707Zm-7.34,-5.784l1.119,3.692l0.249,-2.338c0,0 4.324,-3.9 6.79,-6.124c0.072,-0.065 0.082,-0.174 0.022,-0.251c-0.06,-0.077 -0.169,-0.095 -0.251,-0.043c-2.857,1.825 -7.929,5.064 -7.929,5.064Z"
                /></svg
            ></a>
            <a
              class="link"
              :href="$info.links.github"
              data-tippy-content="@OgabekYuldoshev"
              ><svg
                class="h-6 fill-current text-gray-600 hover:text-green-700"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                /></svg
            ></a>
            <!-- <a class="link" href="#" data-tippy-content="@unsplash_handle"
              ><svg
                class="h-6 fill-current text-gray-600 hover:text-green-700"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Unsplash</title>
                <path
                  d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z"
                /></svg
            ></a> -->
            <a
              class="link"
              :href="$info.links.instagram"
              data-tippy-content="@ogabek_sw"
              ><svg
                class="h-6 fill-current text-gray-600 hover:text-green-700"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                /></svg
            ></a>
            <a
              class="link"
              :href="$info.links.linkedin"
              data-tippy-content="@OgabekYuldoshev"
              ><svg
                class="h-6 fill-current text-gray-600 hover:text-green-700"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>Linkedin</title>
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>
          </div>

          <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->
        </div>
      </div>

      <!--Img Col-->
      <div class="w-full lg:w-2/5">
        <!-- Big profile image for side bar (desktop) -->
        <img
          src="/ogabek.jpg"
          class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
        />
        <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visited: 0,
    };
  },
  mounted() {
    this.$axios
      .$get("https://api.countapi.xyz/hit/yuldoshev.vercel.app/visits")
      .then((res) => {
        this.visited = res.value;
      })
      .catch((err) => {
        alert("Visited Error");
      });
  },
};
</script>
