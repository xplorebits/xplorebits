<template>
  <div class="relative h-full">
    <div
      class="z-0 bg-page absolute top-0 right-0 bottom-0 left-0 opacity-10"
    />
    <div class="z-5 relative w-full max-w-screen-xl block mx-auto p-12">
      <div class="relative h-[48px] sticky top-0">
        <div class="z-10 absolute top-0 right-0 bottom-0 left-0">
          <div class="flex items-center justify-center h-full">
            <logo class="w-auto h-[48px] mx-auto block" />
          </div>
        </div>
        <div class="relative z-20 flex items-center gap-x-6 h-full">
          <h1 class="text-lg font-bold">Xplorebits</h1>
          <div class="flex-grow" />
          <NuxtLink to="/home" class="text-sm">Services</NuxtLink>
          <NuxtLink to="/home" class="text-sm">Company</NuxtLink>
          <NuxtLink to="/home" class="text-sm">Contact</NuxtLink>
        </div>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-page {
  background-image: url(/bg.svg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
