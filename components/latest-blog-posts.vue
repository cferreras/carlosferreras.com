<template>
  <BlogPosts v-slot="{ posts }">
    <div class="space-y-4">
      <div v-for="post in posts" :key="post.id"
        class="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 dark:from-gray-900 dark:to-gray-800 dark:border-gray-800">
        <NuxtLink :to="post.path" class="font-medium text-primary-600 hover:text-primary-800">{{ post.title }}
        </NuxtLink>
        <p v-if="post.description" class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ post.description }}</p>
        <div class="flex items-center mt-3 text-xs text-gray-500 dark:text-gray-400">
          <span v-if="post.meta.publishedAt">{{ new Date(post.meta.publishedAt).toLocaleDateString() }}</span>
          <span v-if="post.body" class="pl-2 ml-2 border-l border-gray-300 dark:border-gray-700">
            {{ readingTime(post.body.value.toString()).minutes }} min de lectura 
          </span>
        </div>
      </div>
    </div>
  </BlogPosts>
</template>

<script setup>
import { useReadingTime } from '~/composables/useReadingTime';

const readingTime = useReadingTime;
</script>
