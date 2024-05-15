<template>
  <content title="Hola">
    <h2>Soy Carlos</h2>
    <p>
      Lee más <NuxtLink to="/about">sobre mi</NuxtLink>, o ve mis ultimos
      <NuxtLink to="/projects">proyectos</NuxtLink>.
    </p>
    <div>
      <h2>Ultimos articulos</h2>
      <LatestBlogPosts />
    </div>
  </content>
</template>
