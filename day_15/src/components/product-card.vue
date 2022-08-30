<script setup lang="ts">
import { onMounted } from 'vue'
import Loader from './catalog-loader.vue'
import {
  Product,
  isLoadingProductImage,
  timeouts,
} from '../composables/catalog'
const { product } = defineProps<{ product: Product }>()

onMounted(() =>
  timeouts.push(
    setTimeout(() => {
      isLoadingProductImage.value = false
    }, 3000)
  )
)
</script>

<template>
  <div
    class="product-card__outter-container"
    :class="{ loading: isLoadingProductImage }"
  >
    <Loader v-if="isLoadingProductImage" color="#242424" />
    <img v-else :src="product.img" :alt="product.name" />

    <div class="product-card__info-container">
      <h1>{{ product.name }}</h1>
      <p>{{ `$ ${product.price}` }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/colors.scss';

.product-card__outter-container {
  position: relative;
  width: 22rem;
  height: 14rem;
  border-radius: 6px;
  overflow: hidden;

  animation: SHOWUP 750ms 1 $smooth;

  &.loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: SHOWUP 750ms 1 $smooth;
  }

  .product-card__info-container {
    width: 100%;
    height: 100%;
    padding: 1.8rem;

    position: absolute;
    top: 0;
    left: 0;

    z-index: 3;

    background-color: $black;

    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    * {
      color: $white;
    }

    p {
      font-size: 2.5rem;
      font-weight: 600;
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
}
</style>
