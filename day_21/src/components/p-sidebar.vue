<script setup lang="ts">
import { user } from '../composables/challenges'
import Card from './p-card.vue'
import Avatar from './p-avatar.vue'
</script>

<template>
  <div class="sidebar">
    <Card>
      <div class="card_content">
        <Avatar :src="user.avatar" classes="w-40 h-40 p-2" />

        <h1 class="profile-name">{{ user.name }}</h1>

        <h2 class="profile-role">
          {{ user.role }}
        </h2>
      </div>
    </Card>

    <Card>
      <div class="card_content">
        <div class="info">
          <img
            class="icon"
            src="../assets/icons/map-pin.svg"
            alt="A map pin vector icon"
          />
          <span>{{ user.location }}</span>
        </div>

        <div class="info">
          <img
            class="icon"
            src="../assets/icons/globe.svg"
            alt="A globe vector icon"
          />
          <span>{{ user.company }}</span>
        </div>

        <a
          class="info"
          v-for="social in user.social"
          :key="social.text"
          :href="social.href"
          target="_blank"
        >
          <img :src="social.icon" alt="" />
          <span>{{ social.text }}</span>
        </a>
      </div>
    </Card>

    <Card>
      <div class="card_content">
        <h1 class="title">Skills</h1>
        <div class="skills">
          <p class="badge" :key="skill" v-for="skill in user.proeficiences">
            {{ skill }}
          </p>
        </div>
      </div>
    </Card>

    <Card>
      <div class="card_content">
        <h1 class="title">Experience</h1>
        <ol type="square">
          <li>
            <div>
              <strong>7AZ</strong>
              <p>08/2021 - 11/2021</p>
              <strong>Frontend Developer</strong>
            </div>
          </li>
        </ol>
      </div>
    </Card>

    <Card>
      <div class="card_content">
        <h1 class="title">Education</h1>
        <ol type="square">
          <li>
            <div>
              <strong>Rocketseat</strong>
              <p>2021 - 2022</p>
              <strong>Ignite</strong>
            </div>
          </li>
        </ol>
      </div>
    </Card>
  </div>
</template>

<style>
@tailwind components;

@layer components {
  .sidebar {
    @apply w-[348px] flex flex-col gap-8 min-h-full;
  }

  .profile-name {
    @apply text-3xl font-bold mt-6;
  }

  .profile-role {
    @apply text-lg -mt-2;
  }

  .info {
    @apply w-full flex items-center gap-4 text-lg;
  }

  .skills {
    @apply grid grid-cols-3 grid-rows-3 gap-2;
  }

  .badge {
    @apply bg-pink-300 text-gray-800 text-center align-middle text-xs uppercase font-bold py-2 px-3 md:px-1 rounded-full;
  }

  ol {
    @apply w-full;
  }

  li {
    @apply flex before:content-['•'] before:mb-auto before:ml-8 before:mr-4 before:inline;
  }
}
</style>
