<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { isDark } from '~/logics'

export default defineComponent({
  setup() {
    const { t, availableLocales, locale } = useI18n()

    const toggleLocales = () => {
      // change to some real logic
      const locales = availableLocales
      locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
    }

    return {
      t,
      toggleLocales,
      isDark,
    }
  },
})
</script>

<template>
  <nav class="mt-6 text-xl">
    <router-link class="mx-2 icon-btn" to="/" :title="t('button.home')">
      <carbon-campsite />
    </router-link>

    <a class="mx-2 icon-btn" :title="t('button.toggle_dark')" @click="isDark = !isDark">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </a>

    <a class="mx-2 icon-btn" :title="t('button.toggle_langs')" @click="toggleLocales">
      <carbon-language />
    </a>

    <router-link class="mx-2 icon-btn" to="/about" :title="t('button.about')">
      <carbon-dicom-overlay />
    </router-link>

    <a class="mx-2 icon-btn" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
      <carbon-logo-github />
    </a>
  </nav>
</template>
