<template>
  <div class="relative rounded-full shadow-sm">
    <div
      class="
        pointer-events-none
        absolute
        inset-y-0
        left-0
        flex
        items-center
        pl-3
      "
    >
      <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
    </div>
    <input
      v-bind="$attrs"
      type="text"
      name="searchPage"
      id="searchPage"
      class="
        block
        w-full
        rounded-full
        border-gray-300
        pl-10
        py-[6px]
        focus:border-blue-500 focus:ring-0
        sm:text-sm
        bg-gray-100
        hover:bg-white
      "
      placeholder="Search..."
    />
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
</script>
