<template>
  <div class="container px-4 mx-auto max-w-4xl">
    <Navigation />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Navigation from '~/components/Navigation.vue';
import Footer from '~/components/Footer.vue';
</script>
