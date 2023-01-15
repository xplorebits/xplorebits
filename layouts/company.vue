<template>
  <div class="w-full max-w-screen-xl block mx-auto">
    <div class="h-[64px] inline-flex items-center gap-x-6 w-full">
      <nuxt-link to="/" class="font-bold text-2xl"> Xplorebits </nuxt-link>

      <div class="flex-grow" />
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/services">Services</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/portfolio">Portfolio</nuxt-link>
      <nuxt-link to="/blog">Blog</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </div>
    <slot />
  </div>
</template>
