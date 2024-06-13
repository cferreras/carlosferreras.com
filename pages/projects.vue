<template>
  <content title="Proyectos">
    <p>¡Hecha un vistazo a mis repositorios!</p>
    <div class="not-prose">
      <div v-for="repo in repos" class="mb-6 last:mb-0 group" v-if="!pending">
        <a :href="repo.html_url">
          <div
            class="rounded-lg border p-4 flex justify-between items-center hover:bg-lime-500 hover:border-lime-500 hover:text-white dark:hover:text-lime-500 dark:hover:bg-transparent"
            v-if="repo.description">
            <div class="w-10/12 sm:w-full">
              <div class="font-bold">
                {{ repo.name
                }}
                <UIcon class="ml-1" v-if="repo.fork" name="i-mdi-source-branch" dynamic />
              </div>
              <div>{{ repo.description }}</div>
              <div class="flex items-center space-x-1 justify-start" v-if="repo.homepage">
                <UIcon class="flex" name="i-heroicons-globe-alt-solid" />
                <a class="hover:underline truncate sm:w-full w-3/5" :href="repo.homepage">{{ repo.homepage }}</a>
              </div>
            </div>
            <div class="flex items-center">
              {{ repo.stargazers_count }}
              <UIcon name="i-heroicons-star-solid" />
            </div>
          </div>
        </a>
      </div>
      <div v-if="pending">Cargando ...</div>
      <div v-if="error">{{ error }}</div>
    </div>
  </content>
</template>
<script setup>
const { data, error, pending } = await useFetch('/api/repos');

const repos = computed(() =>
  data.value.repos
    ?.filter((repo) => repo.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
);
</script>
