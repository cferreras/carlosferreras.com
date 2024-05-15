<template>
  <UCard class="my-10">
    <template #header>
      <h1 class="text-2xl">{{ title }}</h1>
    </template>
    <main class="prose dark:prose-invert max-w-full prose-h1:text-2xl">
      <slot />
    </main>
    <template #footer>
      <footer class="prose dark:prose-invert">
        &copy; 2024 Carlos Ferreras
      </footer>
    </template>
  </UCard>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
