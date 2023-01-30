<template>
  <header class="z-50 bg-wrapper text-gray-600 body-font">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
        flex-col
        md:flex-row
        items-center
      "
    >
      <nuxt-link
        to="/"
        class="
          flex
          title-font
          font-medium
          items-center
          text-gray-900
          mb-4
          md:mb-0
        "
      >
        <logo class="h-[24px] w-auto" />
        <span class="ml-3 text-xl">Xplorebits</span>
      </nuxt-link>
      <nav
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <nuxt-link to="/" class="mr-5 hover:text-gray-900">Home</nuxt-link>
        <nuxt-link to="/about" class="mr-5 hover:text-gray-900"
          >About</nuxt-link
        >
        <nuxt-link to="/" class="hidden mr-5 hover:text-gray-900"
          >Services</nuxt-link
        >
        <nuxt-link to="/" class="hidden mr-5 hover:text-gray-900"
          >Portfolio</nuxt-link
        >
        <nuxt-link to="/" class="hidden mr-5 hover:text-gray-900"
          >Contact</nuxt-link
        >
      </nav>
      <button
        class="
          hidden
          inline-flex
          items-center
          bg-gray-100
          border-0
          py-1
          px-3
          focus:outline-none
          hover:bg-gray-200
          rounded
          text-base
          mt-4
          md:mt-0
        "
      >
        Button
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<style scoped>
.bg-wrapper {
  background: rgba(255, 255, 255, 0.25);
  -webkit-backdrop-filter: blur(21px);
  backdrop-filter: blur(21px);
  border: 1px solid rgba(255, 255, 255, 0.125);
}
</style>
