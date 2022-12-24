<template>
  <div
    class="relative h-16 border-b inline-flex w-full items-center gap-x-4 px-6"
  >
    <nuxt-link class="font-bold hover:text-blue-600" to="/">
      Xplorebits
    </nuxt-link>
    <page-nav-item> Projects </page-nav-item>
    <page-nav-item> Boards </page-nav-item>
    <page-nav-item>
      <div class="flex items-center gap-1">
        Software Development
        <ArrowTopRightOnSquareIcon
          class="w-4 h-4 text-gray-400"
          aria-hidden="true"
        />
      </div>
    </page-nav-item>

    <page-search v-if="useRoute().path !== '/'" />

    <div class="flex-grow" />
    <button
      type="button"
      class="
        inline-flex
        items-center
        rounded-full
        border border-blue-300
        bg-blue-100
        px-3.5
        py-1.5
        text-sm
        font-medium
        leading-4
        text-blue-600
        shadow-sm
        hover:bg-blue-200
        focus:outline-none focus:ring-0
      "
    >
      Log In
    </button>
    <button
      type="button"
      class="
        inline-flex
        items-center
        rounded-full
        border border-transparent
        bg-blue-700
        px-3.5
        py-1.5
        text-sm
        font-medium
        leading-4
        text-white
        shadow-sm
        hover:bg-blue-700
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      "
    >
      Create Account
    </button>

    <div class="border-r border-gray-300 w-1 h-[50%]" />

    <button
      type="button"
      class="
        inline-flex
        items-center
        rounded-full
        border border-blue-300
        p-1
        text-blue-600
        shadow-sm
        hover:bg-blue-700
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      "
    >
      <MoonIcon class="h-4 w-4" aria-hidden="true" />
    </button>
  </div>
</template>

<script setup>
import { MoonIcon, ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
</script>