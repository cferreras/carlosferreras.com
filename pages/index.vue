<template>
  <div class="home-container">
    <div class="hero-section">
      <h1 class="hero-title">Hola, soy <span class="highlight">Carlos</span></h1>
      <p class="hero-description">
        Desarrollador web apasionado por crear experiencias digitales excepcionales
      </p>
      <div class="hero-links">
        <NuxtLink to="/about" class="hero-link">Sobre mí</NuxtLink>
        <NuxtLink to="/projects" class="hero-link">Proyectos</NuxtLink>
      </div>
    </div>

    <div class="section">
      <div class="section-header">
        <h2 class="section-title">Últimos artículos</h2>
        <NuxtLink to="/blog" class="view-all-link">Ver todos <span class="arrow">→</span></NuxtLink>
      </div>
      <div class="articles-container">
        <LatestBlogPosts />
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  @apply py-8 space-y-16;
}

.hero-section {
  @apply flex flex-col items-center text-center py-16 px-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-800;
}

.hero-title {
  @apply text-4xl sm:text-5xl font-bold mb-4 tracking-tight;
}

.highlight {
  @apply text-indigo-600 dark:text-indigo-400;
}

.hero-description {
  @apply text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8;
}

.hero-links {
  @apply flex flex-wrap gap-4 justify-center;
}

.hero-link {
  @apply px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors duration-200 shadow-sm hover:shadow-md;
}

.section {
  @apply mt-4 pt-2 ;
}

.section-header {
  @apply flex justify-between items-center mb-6;
}

.section-title {
  @apply text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100;
}

.view-all-link {
  @apply text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors flex items-center gap-1;
}

.arrow {
  @apply transition-transform duration-200;
}

.view-all-link:hover .arrow {
  @apply transform translate-x-1;
}

</style>
