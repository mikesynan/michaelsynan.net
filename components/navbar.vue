<template>
<nav class="flex items-center justify-between flex-wrap bg-grey-darkest p-6 fixed w-full z-10 pin-t bg-transparent">
  <div class="flex-1 items-center flex-no-shrink lg:mr-6 md:mr-6 mr-0 sm:mr-0">
    <a class="no-underline hover:no-underline" href="#">
      <img src="~static/test.jpeg" alt="" style="max-height: 50px; display: inline-block;">
      <nuxt-link to="/"><span class="lg:text-2xl xl:text-2xl md:text-xl sm:text-sm text-base pl-2 text-gray-800"><i class="em em-grinning"></i>Michael Synan</span></nuxt-link>

    </a>
  </div>
<!--
  <div class="block lg:invisible">
    <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white outline-none">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  </div>
-->
<!--
  <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
  -->
    <div class="w-full flex-1 justify-end items-end w-auto lg:block pt-0 lg:pt-0" id="nav-content">

    <ul class="list-reset flex justify-end items-end">

      <li class="mr-3">
        <nuxt-link to="/posts"><button class="transition duration-100 ease-in-out bg-opal hover:bg-white text-gray-800 font-semibold py-2 px-4 border-2 border-gray-400 rounded shadow">Blog</button></nuxt-link>

      </li>
      <li>
        <a href="/"><button class="transition duration-100 ease-in-out bg-opal hover:bg-white text-gray-800 font-semibold py-2 px-4 border-2 border-gray-400 rounded shadow">
          Contact
        </button></a>
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
