<template>
  <div class="container max-w-lg mx-auto text-start px-5">
  <article>
    <h1 class="py-0 font-medium">{{ article.title }}</h1>

          <p class="pb-1">Article last updated {{ formatDate(article.updatedAt) }}</p>
<div class="thingthing py-4 pt-4 pb-2 mb-4 rounded bg-white shadow">
     <img :src="article.img" style="height: auto;" class="w-full">

    <nuxt-content :document="article" class="px-4 pt-2"/>

    <prev-next :prev="prev" :next="next" class="pt-4 pb-2 px-4"/>
  </div>
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
.thingthing {border: 2px solid black !important;}
<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }

</style>
