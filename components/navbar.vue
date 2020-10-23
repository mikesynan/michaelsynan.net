<template>
  <nav class="max-w-6xl mx-auto flex items-center justify-between flex-wrap p-4 sticky top-0">
    <div class="flex-1 inline-flex lg:mr-6 md:mr-6 mr-0 sm:mr-0">
    <nuxt-link to="/">
        <img src="~static/test.jpeg" alt="" style="max-height: 50px; display: inline-block;">
        <span class="lg:text-2xl xl:text-2xl md:text-xl sm:text-lg text-lg pl-2 text-gray-800 font-medium"><i class="em em-grinning"></i>Michael Synan</span></nuxt-link>
    </div>
    <div class="flex-end inline-flex pt-0 lg:pt-0 mx-auto" id="nav-content">
      <ul class="list-reset inline-flex">
        <li class="mr-3">
          <nuxt-link to="/posts">
            <button class="transition duration-100 ease-in-out bg-opal hover:bg-white hover:shadow-md text-gray-800 font-semibold sm:py-1 sm:px-2 py-1 px-2 lg:py-2 lg:px-4 md:py-2 md:px-4 xl:py-2 xl:px-4 border-2 border-gray-400 rounded shadow">
              Blog
            </button>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">
            <button class="transition duration-100 ease-in-out bg-opal hover:bg-white hover:shadow-md text-gray-800 font-semibold sm:py-1 sm:px-2 py-1 px-2 lg:py-2 lg:px-4 md:py-2 md:px-4 xl:py-2 xl:px-4 border-2 border-gray-400 rounded shadow">
              Contact
            </button></nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    document.getElementById('nav-toggle').onclick = function() {
      document.getElementById("nav-content").classList.toggle("hidden");
    }
  }
}
</script>

<style>
</style>
