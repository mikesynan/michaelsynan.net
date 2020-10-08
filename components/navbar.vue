<template>
  <nav class="flex items-center justify-between flex-wrap bg-grey-darkest p-6 fixed w-full z-10 pin-t bg-blue-500">
  		<div class="flex items-center flex-no-shrink text-white mr-6">
  			<a class="text-white no-underline hover:text-white hover:no-underline" href="#">
          <img src="~static/test.jpeg" alt="" style="max-height: 50px; display: inline-block;">
  				<span class="text-2xl pl-2"><i class="em em-grinning"></i>Michael Synan</span>

  			</a>
  		</div>

  		<div class="block lg:invisible">
  			<button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white outline-none">
  				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
  			</button>
  		</div>

  		<div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
  			<ul class="list-reset lg:flex justify-end flex-1 items-center">
  				<li class="mr-3">
  					<nuxt-link class="inline-block py-2 px-4 text-white no-underline" to="/">Home</nuxt-link>
  				</li>
  				<li class="mr-3">
            <nuxt-link class="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" to="/about">About</nuxt-link>

  				</li>
          <li class="mr-3">
            <nuxt-link class="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" to="/posts">Blog</nuxt-link>

          </li>
  				<li class="mr-3">
  					<a class="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href="#">Contact</a>
  				</li>
  			</ul>
  		</div>
  	</nav>
</template>

<script>
export default {
  mounted(){
  document.getElementById('nav-toggle').onclick = function(){
			document.getElementById("nav-content").classList.toggle("hidden");
		}
  }
}
</script>

<style>

</style>
