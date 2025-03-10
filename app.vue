<template>
  <NuxtLayout> <NuxtPage /></NuxtLayout>
</template>

<script setup>
onMounted(() => {
  // Check for user preference in localStorage
  const theme = localStorage.getItem('theme');
  
  // Check for system preference if no localStorage value
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Apply dark mode if user prefers it or system prefers it
  if (theme === 'dark' || (!theme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.5;
  filter: grayscale(1);
}
</style>
