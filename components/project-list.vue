<template>
        <section>
            <div class="grid gap-6 md:grid-cols-2">
                <article v-for="project in projects" :key="project.id"
                    class="overflow-hidden bg-gray-50 rounded-lg border border-gray-200 transition-all duration-200 group dark:border-gray-700 dark:bg-gray-800 hover:border-primary-500 dark:hover:border-primary-500">
                    <div class="block p-4">
                        <div class="flex justify-between items-center mb-3">
                            <span class="text-xs font-medium text-gray-500 dark:text-gray-400">
                                {{ project.year }}
                            </span>
                            <span
                                class="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                                {{ project.type }}
                            </span>
                        </div>

                        <h4
                            class="font-medium text-gray-900 transition-colors dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-500">
                            {{ project.title }}
                        </h4>

                        <p class="mt-2 text-sm text-gray-600 transition-all dark:text-gray-400 line-clamp-2 hover:line-clamp-none">
                            {{ project.description }}
                        </p>

                        <div class="flex flex-wrap gap-2 mt-4">
                            <span v-for="tech in project.technologies" :key="tech"
                                class="px-2 py-1 text-xs text-gray-800 bg-gray-100 rounded-md dark:bg-gray-700 dark:text-gray-300">
                                {{ tech }}
                            </span>
                        </div>

                        <div
                            class="flex justify-between items-center pt-3 mt-4 border-t border-gray-200 dark:border-gray-700">
                            <div class="flex space-x-3">
                                <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-xs font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-400">
                                    Ver sitio
                                </a>
                                <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-xs font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-400">
                                    Ver código
                                </a>
                            </div>
                            <div class="flex items-center space-x-2">
                                <span v-if="project.stars !== null && project.stars !== undefined" class="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                    {{ project.stars }}
                                </span>
                                <span class="text-xs text-gray-500 dark:text-gray-400">
                                    {{ project.status }}
                                </span>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
</template>

<script setup>
// Datos de ejemplo para proyectos
const projects = ref([
{
        id: 1,
        title: 'Sito de mi servidor de Minecraft',
        description: 'Sito web para mi servidor multijugador de Minecraft, con login con Discord, perfiles de usuario, estadísticas, y más.',
        year: '2025',
        type: 'Web',
        technologies: ['React', 'Next', 'Supabase', 'Tailwind CSS'],
        demoUrl: 'https://www.cubusfera.com',
        repoUrl: 'https://github.com/cferreras/cubusfera-web',
        status: 'En desarrollo',
        stars: null
    },
    {
        id: 2,
        title: 'Portfolio Personal',
        description: 'Sitio web personal construido con Nuxt 3 y Tailwind CSS para mostrar mis proyectos y habilidades.',
        year: '2025',
        type: 'Web',
        technologies: ['Vue.js', 'Nuxt 3', 'Tailwind CSS'],
        demoUrl: 'https://carlosferreras.com',
        repoUrl: 'https://github.com/cferreras/carlosferreras.com',
        status: 'Completado',
        stars: null
    },
    {
        id: 3,
        title: 'Bot de Discord de precios de criptomonedas',
        description: 'Bot que muestra los precios de las criptomonedas en el estado y biografía.',
        year: '2023',
        type: 'Backend',
        technologies: ['Node.js', 'Discord.js'],
        demoUrl: null,
        repoUrl: 'https://github.com/cferreras/cryptocurrency-discord-bot-status',
        status: 'Completado',
        stars: null
    }
]);

// Función para obtener las estrellas de GitHub
const fetchGitHubStars = async (repoUrl) => {
    try {
        const response = await fetch(`/api/repos?url=${encodeURIComponent(repoUrl)}`);
        const data = await response.json();
        console.log(data);
        return data.stars || 0;
    } catch (error) {
        console.error(`Error fetching stars for ${repoUrl}:`, error);
        return 0;
    }
};

// Cargar las estrellas de GitHub al montar el componente
onMounted(async () => {
    for (const project of projects.value) {
        if (project.repoUrl && project.repoUrl.includes('github.com')) {
            project.stars = await fetchGitHubStars(project.repoUrl);
        }
    }
});
</script>