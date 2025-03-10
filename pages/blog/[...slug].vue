<template>
  <div>
    <div class="article-container">
      <template v-if="page">
        <h1 class="article-title">{{ page?.title }}</h1>
        <div class="article-meta">
          <div class="flex items-center">
            <CalendarIcon class="mr-2 w-4 h-4 text-indigo-500" />
            <time :datetime="new Date(page?.meta?.publishedAt as string).toString()" class="article-date">
              {{
        new Date(page?.meta.publishedAt as string).toLocaleString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
              }}
            </time>
          </div>
        </div>
        <article class="prose-article">
          <ContentRenderer v-if="page" :value="page" class="article-content" />
        </article>
        <div class="article-footer">
          <NuxtLink to="/blog" class="back-to-blog">
            <ArrowLeftIcon class="mr-2 w-4 h-4" />
            Volver al blog
          </NuxtLink>
        </div>
      </template>
      <template v-else>
        <div class="article-not-found">
          <FileQuestionIcon class="mb-4 w-16 h-16 text-indigo-500" />
          <h1 class="mb-2 text-2xl font-bold">Artículo no encontrado</h1>
          <p class="mb-6 text-gray-600 dark:text-gray-400">Lo sentimos, no hemos podido encontrar el artículo que
            buscas.</p>
          <NuxtLink to="/blog" class="back-link">
            <ArrowLeftIcon class="mr-2 w-4 h-4" />
            Volver al blog
          </NuxtLink>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CalendarIcon, ArrowLeftIcon, FileQuestionIcon } from 'lucide-vue-next';

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
</script>

<style>
.article-container {
  @apply max-w-3xl mx-auto py-8 px-4 sm:px-0;
}

.article-title {
  @apply text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white leading-tight;
}

.article-meta {
  @apply mb-8 pb-4 border-b border-gray-200 dark:border-gray-800 flex items-center;
}

.article-date {
  @apply text-gray-500 dark:text-gray-400 text-sm;
}

.prose-article {
  @apply max-w-none;
}

.article-content {
  @apply mt-6 leading-relaxed text-base sm:text-lg;
}

.article-content h1,
.article-content h2,
.article-content h3 {
  @apply font-semibold tracking-tight text-gray-900 dark:text-white;
}

.article-content h1 {
  @apply text-3xl sm:text-4xl mb-4 pb-2 dark:border-gray-800;
}

.article-content h2 {
  @apply text-2xl sm:text-3xl mt-10 mb-6;
}

.article-content h3 {
  @apply text-xl sm:text-2xl mt-8 mb-4;
}

.article-content p {
  @apply mb-6 text-gray-800 dark:text-gray-200 leading-relaxed;
}

.article-content a {
  @apply font-medium text-indigo-600 dark:text-indigo-400 hover:underline transition-colors duration-200;
}

.article-content ul,
.article-content ol {
  @apply my-4 ml-6 space-y-2;
}

.article-content li {
  @apply mb-2 text-gray-800 dark:text-gray-200;
}

.article-content blockquote {
  @apply pl-4 border-l-4 border-indigo-500 italic my-6 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 py-2 px-4 rounded-r;
}

.article-content pre {
  @apply p-4 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-x-auto my-6 border border-gray-200 dark:border-gray-700;
}

.article-content code {
  @apply font-mono text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-indigo-700 dark:text-indigo-400;
}

.article-content img {
  @apply rounded-lg shadow-md my-6 max-w-full mx-auto border border-gray-200 dark:border-gray-700;
}

.article-content ul li::before {
  content: "•";
  @apply text-indigo-500 inline-block w-4 -ml-4;
}

.article-content ol {
  @apply list-decimal list-inside;
}

.article-content table {
  @apply w-full my-8 border-collapse;
}

.article-content table th {
  @apply bg-gray-100 dark:bg-gray-800 text-left p-2 font-medium border border-gray-200 dark:border-gray-700;
}

.article-content table td {
  @apply p-2 border border-gray-200 dark:border-gray-700;
}

.article-content hr {
  @apply my-8 border-gray-200 dark:border-gray-800;
}

.article-not-found {
  @apply text-center py-16 flex flex-col items-center justify-center;
}

.back-link {
  @apply inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors;
}

.article-footer {
  @apply mt-12 pt-6 border-t border-gray-200 dark:border-gray-800;
}

.back-to-blog {
  @apply inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors;
}
</style>