<template>
  <div class="relative bg-white pt-16 pb-32 overflow-hidden">
    <div class="relative">
      <div
        class="
          lg:mx-auto
          lg:max-w-7xl
          lg:px-8
          lg:grid
          lg:grid-cols-2
          lg:grid-flow-col-dense
          lg:gap-24
        "
      >
        <div
          class="
            px-4
            max-w-xl
            mx-auto
            sm:px-6
            lg:py-16 lg:max-w-none lg:mx-0 lg:px-0
          "
        >
          <div>
            <div class="mt-6">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                We are made to be in a community
              </h2>
              <p class="mt-4 text-lg text-gray-500">
                NLAK Sel Group is a space for people to share their life, grow
                spiritually and encourage each other with biblical foundation.
                <br /><br />
                Sel Group focuses on homes so we can worship and praise God together 
                with less worries.
              </p>
              <div class="mt-6">
                <a
                  href="#"
                  class="
                    inline-flex
                    px-4
                    py-2
                    border border-transparent
                    text-base
                    font-medium
                    rounded-full
                    shadow-sm
                    text-white
                    bg-indigo-600
                    hover:bg-indigo-700
                  "
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200 pt-6">
            <blockquote>
              <div>
                <p class="text-base text-gray-500">
                  &ldquo;Share your burden and let's walk together. It's easier to walk life with friends then alone.&rdquo;
                </p>
              </div>
              <footer class="mt-3">
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0">
                    <img
                      class="h-6 w-6 rounded-full"
                      src="/img/nlak logo kecil.png"
                      alt=""
                    />
                  </div>
                  <div class="text-base font-medium text-gray-700">
                    Sel Group Team
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div
            class="
              pl-4
              -mr-48
              sm:pl-6
              md:-mr-16
              lg:px-0 lg:m-0 lg:relative lg:h-full
            "
          >
            <img
              class="
                w-full
                rounded-xl
                shadow-xl
                ring-1 ring-black ring-opacity-5
                lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none
              "
              src="/img/group.jpg"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { InboxIcon, SparklesIcon } from "@heroicons/vue/outline";

export default {
  components: {
    InboxIcon,
    SparklesIcon,
  },
};
</script>