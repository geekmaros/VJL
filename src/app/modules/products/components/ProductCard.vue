<template>
  <section class="space-y-5">
      <h2 class="font-medium">{{item.name}}</h2>
      <p>{{item.desc}}</p>
    <p>Price: ${{item.price}}</p>
  </section>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  item: {
    type: Object,
    required: true,
    default: () => []
  },
})
</script>

<style scoped>

</style>
