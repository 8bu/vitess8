<script lang="ts">
import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  setup() {
    // https://github.com/vueuse/head
    // you can use this to manipulate the document head in any components,
    // they will be renedered correctly in the html results with vite-ssg
    useHead({
      title: 'Homepage',
      meta: [
        { name: 'description', content: 'Opinionated Vite Starter Template' },
      ],
    })
  },
})
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <router-view />
    <Footer />
  </main>
</template>
