<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Title -->
    <div class="max-w-2xl mb-10 mt-32 lg:mb-14">
      <h2 class="text-2xl font-bold md:text-4xl text-white">Latest Articles</h2>
      <p class="mt-1 text-gray-300">Check out our latest articles</p>
    </div>
    <!-- End Title -->

    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card -->
      <NuxtLink
        v-for="article in articles"
        :key="article.id"
        :to="article.path"
        class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none bg-white focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
      >
        <div class="">
          <img
            :src="article.image"
            :alt="article.title"
            class="w-full object-cover aspect-video rounded-xl"
          />
        </div>
        <div class="my-6">
          <h3
            class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white"
          >
            {{ article.title }}
          </h3>
          <p class="mt-5 text-gray-600 dark:text-neutral-400">
            {{ article.description }}
          </p>
        </div>
        <div class="mt-auto flex items-center gap-x-3">
          <div>
            <h5 class="text-sm text-gray-800 dark:text-neutral-200">
              By {{ article.author }}
            </h5>
          </div>
        </div>
      </NuxtLink>
      <!-- End Card -->
    </div>
    <!-- End Grid -->

    <!-- Read More Button -->
    <div class="mt-12 text-center">
      <NuxtLink
        to="/blog"
        class="inline-flex items-center px-4 py-3 text-sm font-medium text-center bg-white text-block drop-shadow-md rounded-lg hover:bg-burnt-sienna-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          class="shrink-0 size-4"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </NuxtLink>
    </div>
    <!-- End Read More Button -->
  </div>
</template>

<script lang="ts" setup>
const { data: articles } = await useAsyncData("blog", () => {
  return queryCollection("content").limit(3).all();
});
</script>
