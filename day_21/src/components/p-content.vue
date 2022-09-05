<script setup lang="ts">
import useSWRV from 'swrv'
import { challenges, fetchIssues } from '../composables/challenges'
import Card from './p-card.vue'
import IssueCard from './p-issue.vue'
import Loader from './p-loader.vue'

const { data, isValidating } = useSWRV('/issues', fetchIssues, {
  refreshInterval: 24 * 60 * 60 * 1000,
  errorRetryInterval: 60 * 1000,
})

setTimeout(() => console.log(data), 4000)
</script>

<template>
  <main class="content">
    <Card>
      <div class="card_content">
        <h1 class="title">
          My Chalenges&nbsp;
          <p class="text-[0.95rem] text-yellow-300 font-[400]">#21DaydOfCode</p>
        </h1>
      </div>
    </Card>

    <div class="challenges">
      <Card v-for="challenge of challenges" :key="challenge.id">
        <div class="challenge">
          <strong>{{
            challenge.id.replace('day_', '') + '. ' + challenge.title
          }}</strong>
          <p>{{ challenge.description }}</p>

          <span class="flex gap-3 items-center mt-4">
            <div class="rounded-full h-4 w-4 bg-green-400" />
            VueJS
          </span>
        </div>
      </Card>
    </div>

    <Card>
      <div class="card_content">
        <h1 class="title">Recent Issues</h1>
      </div>
    </Card>

    <Card v-if="isValidating">
      <div class="card_content">
        <Loader bg="bg-gray-700" dimensions="h-full w-full" />
      </div>
    </Card>

    <Card v-else-if="!data">
      <div class="card_content">
        <p>No Recent Issues :D</p>
      </div>
    </Card>

    <IssueCard v-else v-for="issue of data" :key="issue.id" :issue="issue" />
  </main>
</template>

<style>
@tailwind components;

@layer components {
  .content {
    @apply flex-1 flex flex-col gap-8 h-full;
  }

  .challenges {
    @apply grid grid-cols-1 md:grid-cols-2 gap-6;
  }

  .challenge {
    @apply w-full h-full p-4;
  }
}
</style>
