<template>
  <div class="container max-w-lg mx-auto text-start clear-nav px-5">
  <article>
    <h1 class="py-2">{{ article.title }}</h1>

          <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
     <img :src="article.img" style="height: auto;" class="h-20 w-full">

    <nuxt-content :document="article" class="pt-4"/>

    <prev-next :prev="prev" :next="next" class="pt-4 pb-8"/>
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
