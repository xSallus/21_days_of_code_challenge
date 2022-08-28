<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import GalleryItem from './gallery-item.vue'
import { users } from '../composables/gallery'
import { onScroll, scrollForward, scrollBackward, current } from '../composables/scroll'
</script>

<template>
  <p>
	  Sponsored  #SQN
		<span>https://randomuser.me</span>
	</p>
  
	<div class="container">
	 <button
	   @click="()=>scrollBackward()"
		 class="scroll-controll"
		 :disabled="current.value === 0"
	 >
	  <img
		  src="../assets/caret-left.svg"
			alt="2 arrows together"
		/>
	</button>

	<div class="gallery-wrapper" @scroll="onScroll">
    <GalleryItem
	    v-for="user in users"
		  :key="user.id"
      :user="user"
    />

	</div>

	<button
	  @click="()=>scrollForward()"
		class="scroll-controll"
		:disabled="current.value === (users.length - 1)"
	>
	  <img		
		  src="../assets/caret-right.svg"
			alt="2 arrows together"
		/>
	</button>
	</div>
</template>

<style scoped>
.gallery-wrapper {
  width: 800px;
	max-width: 90vw;
	height: 300px;

	position: relative;

	overflow: scroll hidden;
	display: flex;

	scroll-behavior: smooth;
	scroll-snap-type: x mandatory;
	-webkit-overflow-scrolling: touch;
}

.gallery-wrapper::-webkit-scrollbar {
  visibility: hidden;
}

p {
  text-align: left;
  position: absolute;
	top: 1.5rem;
	left: 1.5rem;

	color: #565656;
}

span {
  display: block;
	color: inherit;
}

.container {
  width: 800px;
	max-width: 90vw;
	height: 300px;
	position: relative;
}

.scroll-controll {
  border:0;
	height:300px;
	position:absolute;
	top:0;
	background-color:transparent;
	z-index: 15;
}

.scroll-controll:disabled {
  cursor: not-allowed;
}

.scroll-controll:disabled img {
  filter: invert(200%);
}

.scroll-controll:active {
  background-color: rgba(0,0,0,0.28);
}

.scroll-controll img {
  height: 48px;
}

.scroll-controll:first-of-type {
  left:0;
}

.scroll-controll:last-of-type {
  right:0;
}

@media(min-width:1024px) {
  .scroll-controll:hover {
	  background-color: rgba(0,0,0,0.28);
	}
}
</style>
