<script setup>
import { handleAddItemsToOperation, resetOperation, handleShowResult } from '../composables/calculator'
const { value } = defineProps({ value:'' });

const handleClick = () => {
  if(value==='=') {
	  return handleShowResult()
	}

	if(value==='C'){
	  return resetOperation()
	}

  handleAddItemsToOperation(value)
}
</script>

<template>
<button class="button" @click="handleClick">
  {{ value }}
</button>
</template>

<style scoped>
.button {
  border-radius: 6px;
	background: transparent;
	border: 2px solid #353535;
	color: #353535;

	font-size: 2rem;
}

.button:active {
  background-color: #353535;
	color: #f0f2f5;
	transition: color 0.25s, background-color 0.25s;
}

@media(min-width:1024px) {}
</style>
