<template>
  <div>
    <container>
      <section
        class="
          sticky
          top-[48px]
          inline-flex
          w-full
          h-24
          items-center
          bg-white
          border-b
        "
      >
        <hero-search class="w-full" />
      </section>

      <section class="mt-4">
        <div class="grid grid-cols-12 gap-4">
          <div v-for="item in 100" :key="`pp-${item}`" class="col-span-3">
            <div class="w-full h-[250px] bg-gray-100" />
          </div>
        </div>
      </section>
    </container>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "marketing",
});
</script>
