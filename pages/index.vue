<template>
<div class="container mx-auto px-4">
  <div>
    <div class="flex flex-wrap mb-2 mt-4">
      <div class="md:px-10 lg:px-10 xl:px-10 md:w-1/2 lg:w-1/2 sm:w-full order-last lg:order-first md:order-first sm:order-last xl:order-first flex-1">
        <!-- component -->
        <div>
          <section class="text-gray-700">
            <div class="container mx-auto">
              <div class="sm:mx-auto sm:mb-2">
                <div class="py-2">
                  <details class="mb-4">
                    <summary class="hover:bg-darkcyan2 hover:shadow hover:border-black hover:text-white border-solid border-4 border-gray-600 font-semibold  bg-opal rounded-md py-2 px-4 shadow cursor-pointer transition duration-150 ease-in-out">
                      Website Development and Design
                    </summary>
                    <div class="p-2 opacity-0 transition duration-200 ease-in-out bg-white  border-solid border-2 border-gray-600 mt-2 shadow">
                      <span>I do website design and development. Mostly interested in the Javascript framework Vue. Feel free to get in touch if you need something built.</span>
                    </div>
                  </details>
                  <details class="mb-4">
                    <summary class="hover:bg-darkcyan2 hover:shadow hover:border-black hover:text-white border-solid border-4 border-gray-600 font-semibold bg-opal rounded-md py-2 px-4 shadow cursor-pointer transition duration-150 ease-in-out">
                      Homelab and Linux
                    </summary>
                    <div class="p-2  opacity-0 transition duration-200 ease-in-out bg-white  border-solid border-2 border-gray-600 mt-2 shadow">
                      <span>I'm really into buildling stuff on Linux and running my own instances of open source software. Two platforms that I'm currently using are <a href="https://www.plex.tv/">Plex</a> for streaming media and <a href="https://nextcloud.com/">Nextcloud</a> for online cloud services.</span>
                    </div>
                  </details>
                  <details class="mb-2">
                    <summary class="hover:bg-darkcyan2 hover:shadow hover:border-black hover:text-white border-solid border-4 border-gray-600 font-semibold  bg-opal rounded-md py-2 px-4 shadow cursor-pointer transition duration-150 ease-in-out">
                      About This Website
                    </summary>
                    <div class="p-2 opacity-0 transition duration-200 ease-in-out bg-white  border-solid border-2 border-gray-600 mt-2 shadow">
                      <span>Built with <a href="https://nuxtjs.org/">Nuxt</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a>, using <a href="https://vueformulate.com/">Vue Formulate</a> for the contact page and <a href="https://content.nuxtjs.org/">Content</a> for the blog. Deployed via Github on <a href="https://www.netlify.com/">Netlify</a>.</span>
                    </div>
                  </details>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="lg:w-1/2 md:w-1/2 sm:w-full px-2">
        <div>
          <div class="text-2xl pb-4">
            Welcome to my website, please feel free to check out my blog and other things.
          </div>
          <div class="sm:invisible sm:h-0 lg:visible md:visible h-0 invisible">
            <span class="p-2">
              <fa :icon="faGithub" transform="grow-8" value="27" class="cursor-pointer hover:text-darkcyan2 hover:shadow" /></span>
            <span class="p-2" <fa :icon="faTwitter" transform="grow-8" value="27" class="cursor-pointer hover:text-darkcyan2 hover:shadow" /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sm:visible lg:invisible md:invisible visible">
    <span class="p-2">
      <fa :icon="faGithub" transform="grow-8" value="27" class="cursor-pointer hover:text-darkcyan2 hover:shadow" /></span>
    <span class="p-2" <fa :icon="faTwitter" transform="grow-8" value="27" class="cursor-pointer hover:text-darkcyan2 hover:shadow" /></span>
  </div>
</div>
</template>

<script>
import {
  fas
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import {
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

export default {
  head: {
    title: 'My cool home page',
    meta: [{
      hid: 'description',
      name: 'description',
      content: 'my cool home page content'
    }],
  },
  computed: {
    fas() {
      return fas
    },
    faGithub() {
      return faGithub
    },
    faTwitter() {
      return faTwitter
    },

  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.clear-nav {
  padding-top: 98px;
}

.container-center {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

details[open=""] summary {
  background-color: darkcyan !important;
  color: white !important;
  border-color: black !important;
}

details[open=""] div {
  opacity: 1 !important;
}
</style>
