<template>
  <div class="relative h-full">
    <page-header class="sticky top-0 bg-white" />
    <div>
      <slot />
    </div>
    <page-footer />
  </div>
</template>

<style scoped>
.bg-page {
  background-image: url(/bg.svg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
