<template>
  <UCard class="mt-10 prose-lg">
    <nav>
      <!-- desktop -->
      <div class="sm:flex sm:space-x-8 space-y-2 sm:space-y-0">
        <div class="flex justify-between items-center self-center">
          <ULink class="block w-36 font-medium" to="/"> Carlos Ferreras </ULink>
          <div class="flex">
            <ColorScheme>
              <div class="sm:border-t-0 self-center sm:hidden mr-3 flex">
                <UButton
                  class=""
                  v-if="$colorMode.value === 'dark'"
                  @click="$colorMode.preference = 'light'"
                  icon="i-heroicons-moon-20-solid"
                  size="sm"
                  color="black"
                  variant="ghost"
                ></UButton>
                <UButton
                  class=""
                  v-if="$colorMode.value === 'light'"
                  @click="$colorMode.preference = 'dark'"
                  icon="i-heroicons-sun-20-solid"
                  size="sm"
                  color="white"
                  variant="ghost"
                ></UButton>
              </div>
            </ColorScheme>
            <UButton
              v-if="menuOpen"
              @click="menuOpen = !menuOpen"
              class="sm:hidden"
              icon="i-heroicons-bars-3"
              size="sm"
              color="gray"
              variant="ghost"
            />
            <UButton
              v-else
              @click="menuOpen = !menuOpen"
              class="sm:hidden"
              icon="i-heroicons-x-mark"
              size="sm"
              color="gray"
              variant="ghost"
            />
          </div>
        </div>
        <div
          class="sm:space-x-4 sm:flex justify-between w-full items-center"
          :class="{ hidden: menuOpen }"
        >
          <div
            class="sm:space-x-4 space-y-2 sm:space-y-0 sm:flex justify-between"
          >
            <ULink
              class="block"
              to="/"
              active-class="text-primary"
              inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 block"
            >
              Inicio
            </ULink>
            <ULink
              class="block"
              to="/about"
              active-class="text-primary"
              inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              Sobre mi
            </ULink>
            <ULink
              class="block"
              to="/projects"
              active-class="text-primary"
              inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 "
            >
              Proyectos
            </ULink>
            <ULink
              class="block"
              to="/blog"
              active-class="text-primary"
              inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 "
            >
              Blog
            </ULink>
          </div>

          <ColorScheme>
            <UButton
              class="m-0 hidden sm:flex"
              v-if="$colorMode.value === 'dark'"
              @click="$colorMode.preference = 'light'"
              icon="i-heroicons-moon-20-solid"
              size="sm"
              color="black"
              variant="ghost" />
            <UButton
              class="m-0 hidden sm:flex"
              v-if="$colorMode.value === 'light'"
              @click="$colorMode.preference = 'dark'"
              icon="i-heroicons-sun-20-solid"
              size="sm"
              color="white"
              variant="ghost"
          /></ColorScheme>
        </div>
      </div>
    </nav>
  </UCard>
</template>

<script setup>
const menuOpen = ref(true);
</script>

<style lang="scss" scoped></style>
