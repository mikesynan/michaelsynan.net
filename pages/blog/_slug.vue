<template>
  <div class="container mx-auto text-start clear-nav">
  <article>
    <h1 class="py-2">{{ article.title }}</h1>

     <p>{{ article.description }}</p>
     <img :src="article.img" style="min-height: 100px; border: 1px solid red;">
     <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
    <nuxt-content :document="article" />

    <prev-next :prev="prev" :next="next" />
  </article>
</div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    },
    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
 },
 async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },

  }
</script>

<style>

</style>
