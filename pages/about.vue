<template>
  <div class="about-container">
    <div class="about-header">
      <h1 class="about-title">Sobre <span class="highlight">mí</span></h1>
    </div>

    <div class="about-content">
      <p class="about-intro">¡Hola a todos!</p>

      <p>
        Soy <strong class="highlight">Carlos</strong>, un desarrollador web de 28 años afincado en
        Asturias. Apasionado por la tecnología y la creación de experiencias
        digitales, he dedicado mi formación al desarrollo de aplicaciones web.
      </p>
      
      <p>
        En mi camino profesional, actualmente me especializo en Next.js, aunque también 
        tengo amplia experiencia con Vue.js y Nuxt.js, como en esta página web. 
        He trabajado con Nuxt.js en TeamEQ, donde pude desarrollar mis habilidades 
        y aplicar este framework en proyectos reales.
      </p>
      
      <p>
        Más allá del ámbito profesional, soy un gran aficionado a los videojuegos,
        disfruto de ver series y pasar tiempo con mi novia Vero.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  @apply py-8 space-y-8;
}

.about-header {
  @apply flex flex-col items-center text-center py-16 px-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-800 mb-10;
}

.about-title {
  @apply text-4xl sm:text-5xl font-bold tracking-tight;
}

.highlight {
  @apply text-indigo-600 dark:text-indigo-400;
}

.about-content {
  @apply space-y-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto;
}

.about-intro {
  @apply text-xl font-medium;
}

.about-content p {
  @apply leading-relaxed;
}

.about-content strong {
  @apply font-semibold;
}
</style>
