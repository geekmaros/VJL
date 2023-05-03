<template>
  <section class="space-y-5">
    <h2 class="font-medium">{{item.title}}</h2>
    <p>{{item.body}}</p>
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
