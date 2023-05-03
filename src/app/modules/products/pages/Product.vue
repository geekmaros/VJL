<template>
  <section>
    <h1 class="my-5">Product Domain</h1>
    <div class="grid grid-cols-3 gap-8">
      <ProductCard v-for="(product, id) in allProducts" :key="`product-${id}`" :item="product"/>
    </div>
  </section>
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue";
import { useProduct } from "../store";

const store = useProduct()
store.fetchProducts()
const allProducts = store.getAllProducts
console.log(allProducts)
</script>

<style scoped>

</style>
