<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup></script>

<style>
@import "tailwindcss";
@plugin "@tailwindcss/typography";

body {
  --tw-bg-opacity: 0.9;
  background-color: rgb(26 48 87 / var(--tw-bg-opacity));
}

@font-face {
  font-family: Dillan;
  src: url("./fonts/dillan.woff") format("woff2");
}

@theme {
  --font-serif: Dillan, serif;
}

html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  font-family: Inter Variable, Inter, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol,
    "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
}

/* Scrollbar styles */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}
</style>
