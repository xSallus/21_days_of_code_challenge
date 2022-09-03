<script setup lang="ts">
import { image, isLoadingImage } from '../composables/image'
</script>

<template>
  <div class="container" v-if="isLoadingImage">
    <div class="spinner">
      <div />
    </div>
  </div>

  <div class="container" v-else>
    <img v-if="!!image" :src="image" alt="Random Image from Unsplash" />
    <p v-else>Click to get a random image</p>
  </div>
</template>

<style scoped lang="scss">
$smooth: cubic-bezier(0.7, 0.7, 0.7, 0.7);
$linear: linear-gradient(45deg, #f0f2f5, transparent);

.container {
  width: 300px;
  height: 300px;
  padding: 0.5rem;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #565656;

  p {
    color: #f0f2f5;
    font-size: 1.25rem;
    animation: SHOWUP 750ms 1 $smooth;
  }

  img {
    height: 100%;
    width: 100%;
    border-radius: inherit;
    animation: SHOWUP 750ms 1 $smooth;
  }

  & > .spinner {
    width: 48px;
    height: 48px;
    padding: 0.24rem;

    background-image: $linear;

    border-radius: 64px;
    animation: SHOWUP 750ms 1 $smooth, SPIN 3s infinite $smooth;

    & > div {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: #565656;
    }
  }
}

@keyframes SPIN {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes SHOWUP {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
