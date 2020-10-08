<template>
  <div class="container clear-nav  mx-auto px-4">
    <div>



      <div class="flex mb-4">
        <div class="w-1/2">



          <!-- component -->
          <div>
                <section class="text-gray-700">
                  <div class="container px-5 mx-auto">

                    <div class="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
                      <div class="w-full px-4 py-2">
                        <details class="mb-4">
                          <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                            Website Development and Design
                          </summary>

                          <span>
                            Laboris qui labore cillum culpa in sunt quis sint veniam.
                            Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                            minim velit nostrud pariatur culpa magna in aute.
                          </span>
                        </details>
                        <details class="mb-4">
                          <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                            Homelab Setup
                          </summary>

                          <span>
                            Laboris qui labore cillum culpa in sunt quis sint veniam.
                            Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                            minim velit nostrud pariatur culpa magna in aute.
                          </span>
                        </details>
                        <details class="mb-4">
                          <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                            Other Things
                          </summary>

                          <span>
                            Laboris qui labore cillum culpa in sunt quis sint veniam.
                            Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                            minim velit nostrud pariatur culpa magna in aute.
                          </span>
                        </details>
                      </div>

                    </div>
                  </div>
                </section>
              </div>










</div>
        <div class="w-1/2">
          <div class="links">
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="button--green"
            >
              Documentation
            </a>
            <a
              href="https://github.com/nuxt/nuxt.js"
              target="_blank"
              rel="noopener noreferrer"
              class="button--grey"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {


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

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
