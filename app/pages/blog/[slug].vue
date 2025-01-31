<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<template>
  <div>
    <div class="max-w-screen-xl mx-auto px-8">
      <div
        v-if="page"
        class="flex mx-auto max-w-[735px] my-8 lg:mt-24 lg:mb-14"
      >
        <div>
          <nuxt-link
            class="mb-10 flex items-center gap-1 text-zinc-200 hover:underline text-lg"
            to="/"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back
          </nuxt-link>
          <div>
            <h1
              class="font-serif text-4xl lg:text-5xl font-medium mt-1 lg:leading-tight text-white"
            >
              {{ page.title }}
            </h1>
            <p class="text-lg lg:text-xl my-4 lg:leading-relaxed text-gray-300">
              {{ page.description }}
            </p>
            <div class="flex gap-2 mt-3 items-center flex-wrap md:flex-nowrap">
              <span
                class="text-zinc-300 uppercase tracking-wider text-md font-semibold"
              >
                By
                <NuxtLink
                  :to="`/author/${page.author}`"
                  class="text-zinc-400 hover:underline"
                  >{{ page.author }}</NuxtLink
                >
              </span>
              <span class="text-gray-300">/</span>
              <time
                class="text-zinc-400 uppercase tracking-wider text-md font-semibold"
                datetime="Thu Dec 14 2023 12:00:00 GMT+0000 (Coordinated Universal Time)"
              >
                {{ page.publishAt }}
              </time>
            </div>
            <!-- <hr class="h-px mt-6 my-10 w-32 border-zinc-800 border-2" /> -->
          </div>
        </div>
        <!-- <aside class="h-screen sticky top-0">// Fixed Sidebar</aside> -->
      </div>
    </div>

    <article
      class="max-w-screen-xl mx-auto pt-10 pb-16 lg:pt-16 lg:pb-24 bg-white shadow-xl rounded-xl break-words"
    >
      <div
        class="article-wrapper mx-auto mt-6 p-6 md:p-0 prose lg:prose-lg prose-zinc prose-quoteless prose-headings:m-0 prose-headings:text-zinc-800 prose-headings:font-serif prose-headings:font-normal prose-a:text-burnt-sienna-500 hover:prose-a:text-burnt-sienna-600 prose-h4:text-burnt-sienna-500"
      >
        <ContentRenderer v-if="page" :value="page" />
      </div>
    </article>
  </div>
</template>

<style scoped></style>
