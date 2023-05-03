<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-full bg-red-100 p-10">
      <nav class="flex mx-auto space-x-8">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products">Product</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
      </nav>
  </header>

  <main class="p-10">
    <RouterView />
  </main>
</template>

<style scoped>

</style>
