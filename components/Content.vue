<template>
  <Card class="w-full border-0 shadow-none">
    <CardHeader>
      <CardTitle class="text-2xl font-bold">{{ title }}</CardTitle>
    </CardHeader>
    <CardContent>
      <main class="max-w-full prose dark:prose-invert prose-h1:text-2xl">
        <slot />
      </main>
    </CardContent>
  </Card>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'

defineProps({
  title: String,
});
</script>
