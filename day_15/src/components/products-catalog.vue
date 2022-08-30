<script setup lang="ts">
import { catalogProducts } from '../composables/catalog'
import ProductCard from './product-card.vue'
</script>

<template>
  <div class="products__wrapper">
    <ProductCard
      v-for="product in catalogProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style scoped lang="scss">
.products__wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
  max-height: fit-content;
  width: 100vw;
  max-width: 1104px;
  flex: none;
}
</style>
