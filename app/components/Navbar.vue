<template>
  <div class="max-w-screen-xl mx-auto px-5">
    <header class="flex flex-row justify-between items-center py-8">
      <div class="flex w-auto items-center justify-between">
        <NuxtLink href="/" class="text-lg text-white font-bold -ml-3">
          Ard Labs
        </NuxtLink>
      </div>
      <div
        class="z-10 flex flex-col sm:flex-row gap-2 sm:gap-8 text-sm sm:text-base"
      >
        <NuxtLink
          href="/blog"
          class="text-gray-100 hover:text-gray-200 hover:underline"
          >Blog</NuxtLink
        >
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
