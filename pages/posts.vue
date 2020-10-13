<template>
  <div class="clear-navbar">
  <div class="text-left container mx-auto px-2 py-2">

    <ul class="text-left">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">

          <div class="px-2 py-2 my-2 bg-opal hover:bg-darkcyan2 hover:shadow rounded border-solid border-4 border-gray-600 hover:border-black hover:text-white transition duration-100 ease-in-out">
            <h2 class="font-semibold">{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>

<style>
.clear-navbar {padding-top: 98px;}
  </style>
