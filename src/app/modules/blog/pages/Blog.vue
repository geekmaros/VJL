<template>
<div>
  <h1 class="my-5">Blog Domain</h1>

  <div class="grid grid-cols-3 gap-8">
  <BlogCard v-for="(blog, id) in allBlogs" :key="`blog-${id}`" :item="blog" />
  </div>
</div>
</template>

<script setup>
import BlogCard from "../components/BlogCard.vue";
import { useBlog } from "../store";

const store = useBlog()
store.fetchBlogs()
const allBlogs = store.getAllBlogs
console.log(allBlogs)
</script>

<style scoped>

</style>
