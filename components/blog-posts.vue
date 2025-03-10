<template>
  <slot :posts="articles">
    <section class="not-prose">     
      <div class="space-y-4">
        <div v-for="article in articles" :key="article.path" 
             class="overflow-hidden bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 group dark:border-gray-700 dark:bg-gray-800 hover:border-primary-500 dark:hover:border-primary-500">
          <NuxtLink :to="article.path" class="block p-4">
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs font-medium text-gray-500 dark:text-gray-400">
                {{ formatDate(article.meta.publishedAt) }}
              </span>
              <span v-if="article.displayYear" 
                    class="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                {{ article.year }}
              </span>
            </div>
            <h4 class="font-medium text-gray-900 transition-colors dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-500">
              {{ article.title }}
            </h4>
            <p v-if="article.description" class="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {{ article.description }}
            </p>
            <div class="flex items-center mt-3 text-xs text-gray-500 dark:text-gray-400">
              <span>{{ readingTime(article.body?.value?.toString() || '').minutes }} min de lectura</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </slot>
</template>

<script setup>
import { useReadingTime } from '~/composables/useReadingTime';

const { data } = await useAsyncData('blog', () => {
  return queryCollection('blog').all()
})

const readingTime = useReadingTime;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', { 
    day: 'numeric', 
    month: 'short'
  });
}

const articles = computed(() => {
  if (!data.value) {
    return [];
  }

  const result = [];
  let lastYear = null;

  for (const article of data.value) {
    const year = new Date(article.meta.publishedAt).getFullYear();
    const displayYear = year !== lastYear;
    article.displayYear = displayYear;
    article.year = year;
    result.push(article);
    lastYear = year;
  }

  return result;
});
</script>
