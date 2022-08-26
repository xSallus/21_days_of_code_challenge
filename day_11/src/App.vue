<script setup lang="ts">
import { onUnmounted, Ref, ref } from 'vue'
import Input from './components/inputs-base.vue'
import Checkbox from './components/input-checkbox.vue'
import Toast from './components/notification-toast.vue'
import {
  mock,
  email,
  password,
  checked,
  showToast,
  timeouts,
} from './composables/login'

function handleSubmit(e: any) {
  if (email.value !== mock.email || password.value !== mock.password) {
    showToast('Invalid credentials', 'error')
    return
  }

  showToast('Login Successfull', 'success')
}

onUnmounted(() => {
  timeouts.forEach(clearTimeout)
})
</script>

<template>
  <p class="hint">
    Email: '{{ mock.email }}'
    <span>Password: '{{ mock.password }}'</span>
  </p>
  <form @submit.prevent="handleSubmit" :key="formKey">
    <Input placeholder="Email" type="email" />
    <Input placeholder="Password" :minlength="8" type="password" />
    <div>
      <label>
        <Checkbox />
        <span>Remember me</span>
      </label>

      <a href="http://github.com/xSallus?tab=repositories" target="_blank"
        >Forgotten password?</a
      >
    </div>
    <button>login</button>
  </form>
  <Toast />
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

a {
  text-decoration: none;
  color: #565656;
}

span {
  color: #565656;
}

button {
  padding: 0.75rem;
  border: 0;
  border-radius: 4px;
  background-color: #565656;
}

button:active {
  filter: brightness(0.68);
}

form div > label {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

form div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hint {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;

  color: #565656;
}

.hint span {
  display: block;
  text-align: left;
  color: inherit;
}
</style>
