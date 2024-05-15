<template>
  <div>
    <ContentDoc v-slot="{ doc }">
      <content :title="doc.title">
        <article>
          <time :datetime="new Date(doc.publishedAt.valueOf()).toString()">
            {{
              new Date(doc.publishedAt.valueOf()).toLocaleString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}
          </time>
          <ContentRenderer :value="doc" class="mt-8" /></article
      ></content>
    </ContentDoc>
  </div>
</template>
