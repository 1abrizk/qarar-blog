<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Title -->
    <div class="max-w-2xl mt-32 mb-10 lg:mb-14">
      <h2 class="text-2xl font-bold md:text-4xl text-white">All Articles</h2>

      <p class="mt-1 text-gray-300">
        Read articles about web development, Nuxt, and other interesting topics.
      </p>
    </div>
    <!-- End Title -->

    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card -->
      <NuxtLink
        v-for="article in articles"
        :key="article.id"
        :to="article.path"
        class="group flex flex-col h-full bg-white border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
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
          <!-- <img
              class="size-8 rounded-full"
              :src="article.authorImage"
              alt="Author Avatar"
            /> -->
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
  </div>
</template>

<script lang="ts" setup>
const { data: articles } = await useAsyncData("all-blog", () => {
  return queryCollection("content").all();
});
</script>
