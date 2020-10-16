<template>
<div class="container mx-auto px-4">
  <div>
    <div class="flex flex-wrap mb-4">
      <div class="md:px-10 lg:px-10 xl:px-10 md:w-1/2 lg:w-1/2 sm:w-full order-last lg:order-first md:order-first sm:order-last xl:order-first flex-1">
        <!-- component -->
        <div>
          <section class="text-gray-700">
            <div class="container mx-auto">

              <div class="sm:mx-auto sm:mb-2">
                <div class="py-2">
                  <details class="mb-4">
                    <summary class="border-solid border-4 border-gray-600 font-semibold  bg-opal rounded-md py-2 px-4 shadow cursor-pointer transition duration-150 ease-in-out">
                      Website Development and Design
                    </summary>

                    <div class="p-2 opacity-0 transition duration-200 ease-in-out bg-white  border-solid border-2 border-gray-600 mt-2 shadow">
                    I do website design and development. Mostly interested in Vue,
                    but happy building on WordPress or without a framework.
                    </div>
                  </details>
                  <details class="mb-4">
                    <summary class="border-solid border-4 border-gray-600 font-semibold bg-opal rounded-md py-2 px-4 shadow cursor-pointer transition duration-150 ease-in-out">
                      Homelab Setup
                    </summary>

                      <div class="p-2  opacity-0 transition duration-200 ease-in-out bg-white  border-solid border-2 border-gray-600 mt-2 shadow">
                      I first got into Linux in the early 2000's in response to privacy concerns about Microsoft Windows and the restrictions
                      they place on software. I wanted to be able to confirm that my Operating System wasn't spying on me, control what it's doing
                      and make it look the way I wanted. That led me to Ubuntu 12.04, since then I've expanded out to Linux Mint and then Manjaro.
                    </div>
                  </details>
                  <details class="mb-4">
                    <summary class="border-solid border-4 border-gray-600 font-semibold  bg-opal rounded-md py-2 px-4 shadow cursor-pointer transition duration-150 ease-in-out">
                      This Website
                    </summary>

                    <div class="p-2 opacity-0 transition duration-200 ease-in-out bg-white  border-solid border-2 border-gray-600 mt-2 shadow">
                      Built with Nuxt and Tailwind CSS, deployed via Github on Netlify.
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
<div class="sm:invisible lg:visible md:visible invisible">
      <span class="p-2"> <fa :icon="faGithub"  transform="grow-8" value="27" class="cursor-pointer hover:text-darkcyan2 hover:shadow" /></span>
      <span class="p-2" <fa :icon="faTwitter" transform="grow-8" value="27"  class="cursor-pointer hover:text-darkcyan2 hover:shadow" /></span>
</div>
     </div>


      </div>
    </div>
  </div>
</div>
</template>

<script>



  import { fas } from '@fortawesome/free-solid-svg-icons'
   import { faGithub } from '@fortawesome/free-brands-svg-icons'
   import { faTwitter } from '@fortawesome/free-brands-svg-icons'

   export default {
     head: {
       title: 'My cool home page',
       meta: [
         {
           hid: 'description',
           name: 'description',
           content: 'my cool home page content'
         }
       ],
     },
     computed: {
       fas () {
          return fas
       },
       faGithub () {
          return faGithub
       },
       faTwitter () {
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

details[open=""] summary {background-color: darkcyan !important; color: white !important; border-color: black !important;}
details[open=""] div {opacity: 1 !important;}

</style>
