<template>
  <div class="rounded-full h-14">
    <div class="grid grid-cols-12 gap-x-0 h-full">
      <div class="relative col-span-10">
        <div
          class="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            flex
            items-center
            pl-6
          "
        >
          <MagnifyingGlassIcon
            class="h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="text"
          name="searchPage"
          id="searchPage"
          class="
            block
            w-full
            rounded-tl-full rounded-bl-full
            border-gray-300
            pl-14
            h-full
            focus:border-gray-300 focus:outline-none focus:ring-0
            sm:text-sm
            lg:text-lg
            bg-gray-100
            hover:bg-white
          "
          placeholder="Search..."
        />
      </div>
      <div
        class="
          col-span-2
          h-full
          px-3
          border-t border-r border-b border-gray-300
          rounded-tr-full rounded-br-full
        "
      >
        <div class="flex items-center h-full gap-3">
          <button
            class="bg-black text-white font-medium px-3 py-1 rounded-full"
          >
            Tutorials
          </button>
          <button
            class="bg-white text-black font-medium px-3 py-1 rounded-full"
          >
            Courses
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
</script>
