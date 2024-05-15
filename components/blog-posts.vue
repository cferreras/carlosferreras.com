<template>
  <slot :posts="articles">
    <section class="not-prose">
      <div class="column">
        <div class="w-12">Fecha</div>
        <div>Titulo</div>
      </div>
      <ul>
        <li v-for="article in articles">
          <NuxtLink :to="article._path" class="column group">
            <div
              :class="{
                'text-gray-500 dark:text-gray-400 group-hover:text-lime-500':
                  article.displayYear,
                'text-transparent': !article.displayYear,
              }"
              class="w-12 text-gray-500"
            >
              {{ article.year }}
            </div>
            <div class="group-hover:text-lime-500">{{ article.title }}</div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>
</template>

<script setup>
const { data } = await useAsyncData("data", () =>
  queryContent("/")
    .sort({ publishedAt: -1 })
    .where({ title: { $ne: "Contacto" } })
    .only(["title", "description", "publishedAt", "_path"])
    //TODO - Pagination
    //.skip(1)
    //.limit(2)
    .find()
);

const articles = computed(() => {
  if (!data.value) {
    return [];
  }

  const result = [];
  let lastYear = null;

  for (const article of data.value) {
    const year = new Date(article.publishedAt).getFullYear();
    const displayYear = year !== lastYear;
    article.displayYear = displayYear;
    article.year = year;
    result.push(article);
    lastYear = year;
  }

  return result;
});
</script>

<style scoped>
.column {
  @apply flex space-x-8 py-2 items-center;
}
</style>
