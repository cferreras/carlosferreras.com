<template>
  <div class="navigation-container">
    <nav class="main-nav">
      <!-- desktop and mobile header -->
      <div class="nav-content">
        <div class="logo-container">
          <NuxtLink class="logo-link" to="/">
            <span class="logo-text">Carlos <span class="logo-highlight">Ferreras</span></span>
          </NuxtLink>
          <div class="mobile-controls">
            <Button
              @click="menuOpen = !menuOpen"
              class="sm:hidden"
              variant="ghost"
              size="sm"
            >
              <MenuIcon v-if="!menuOpen" class="w-5 h-5" />
              <XIcon v-else class="w-5 h-5" />
            </Button>
          </div>
        </div>

        <!-- Navigation links -->
        <div class="nav-links" :class="{ 'nav-links-open': menuOpen }">
          <NuxtLink
            to="/"
            class="nav-link"
            active-class="nav-link-active"
          >
            Inicio
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="nav-link"
            active-class="nav-link-active"
          >
            Sobre mí
          </NuxtLink>
          <NuxtLink
            to="/projects"
            class="nav-link"
            active-class="nav-link-active"
          >
            Proyectos
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="nav-link"
            active-class="nav-link-active"
          >
            Blog
          </NuxtLink>

          <!-- Theme toggle button -->
          <Button variant="ghost" size="icon" @click="toggleTheme" class="theme-toggle">
            <ComputerIcon v-if="themeMode === 'system'" class="w-5 h-5" />
            <SunIcon v-else-if="themeMode === 'light'" class="w-5 h-5" />
            <MoonIcon v-else-if="themeMode === 'dark'" class="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Button } from './ui/button';
import { MenuIcon, XIcon, SunIcon, MoonIcon, ComputerIcon } from 'lucide-vue-next';

const menuOpen = ref(false);
const themeMode = ref('system'); // Start with system theme

onMounted(() => {
  // Check screen size and only open menu by default on desktop
  menuOpen.value = window.innerWidth >= 640;
  
  // Check stored theme preference
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    themeMode.value = storedTheme;
  }
  
  // Apply theme based on current mode
  applyTheme();
  
  // Add resize listener to handle menu state
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 640) {
      menuOpen.value = true;
    } else {
      menuOpen.value = false; // Close menu when screen is smaller than 640px
    }
  });
});

function applyTheme() {
  if (themeMode.value === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (themeMode.value === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    // System preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

function toggleTheme() {
  // Cycle through themes: system -> light -> dark -> system
  if (themeMode.value === 'system') {
    themeMode.value = 'light';
  } else if (themeMode.value === 'light') {
    themeMode.value = 'dark';
  } else {
    themeMode.value = 'system';
  }
  
  // Store preference
  localStorage.setItem('theme', themeMode.value);
  
  // Apply the new theme
  applyTheme();
}
</script>

<style scoped>
.navigation-container {
  @apply py-4;
}

.main-nav {
  @apply bg-white dark:bg-gray-900 bg-gray-50 rounded-xl border border-gray-200 dark:border-gray-800;
}

.nav-content {
  @apply px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between;
}

.logo-container {
  @apply flex justify-between items-center;
}

.logo-link {
  @apply text-xl font-semibold text-gray-900 dark:text-white transition-colors flex items-center;
}

.logo-text {
  @apply relative py-1 tracking-wide;
}

.logo-highlight {
  @apply text-indigo-600 dark:text-indigo-400 font-bold;
}

/* Add a subtle underline animation on hover */
.logo-text::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300;
}

.logo-link:hover .logo-text::after {
  @apply w-full;
}

.mobile-controls {
  @apply sm:hidden;
}

.nav-links {
  @apply hidden sm:flex sm:items-center sm:space-x-6 mt-4 sm:mt-0 flex-col sm:flex-row space-y-4 sm:space-y-0;
}

.nav-links-open {
  @apply flex;
}

.nav-link {
  @apply font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors;
}

.nav-link-active {
  @apply text-indigo-600 dark:text-indigo-400 font-semibold;
}

.theme-toggle {
  @apply ml-0 sm:ml-2 mt-4 sm:mt-0 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400;
}

/* Estilos específicos para móvil */
@media (max-width: 639px) {
  .nav-links-open .theme-toggle {
    @apply w-full flex justify-start hover:bg-transparent p-0 h-6;
  }
  
  .nav-links-open .theme-toggle svg {
    @apply mr-2;
  }
  
  /* Añadir texto al botón en móvil */
  .nav-links-open .theme-toggle::before {
    content: 'Cambiar tema';
    @apply text-base;
  }
}
</style>
