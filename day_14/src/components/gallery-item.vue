<script setup lang="ts">
import { User } from '../composables/gallery'

const { user } = defineProps<{ user: User }>()
</script>

<template>
  <div class="gallery-item-wrapper">
    <img :src="user.avatar" alt="" />
    <p>{{ user.name }}</p>
  </div>
</template>

<style scoped>
.gallery-item-wrapper {
  width: 100%;
  max-width: 400px;
  height: 100%;
  flex: none;

  scroll-snap-align: start;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  outline: 2px solid #000;
  clip-path: var(--path);
}

.gallery-item-wrapper::after {
  content: '';
  height: 300px;
  width: inherit;
  position: absolute;
  clip-path: var(--path);
  background-color: rgba(0, 0, 0, 0.68);
  top: -1px;
  left: 0;
}

p {
  color: #999;
  font-size: 1.75rem;
  font-weight: 600;

  position: absolute;

  bottom: 15%;
  left: 50%;

  transform: translateX(-50%);
  z-index: 10;
}

.gallery-item-wrapper::hover::after {
  background-color: rgba(0, 0, 0, 0);
}
</style>
