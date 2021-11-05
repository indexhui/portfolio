<script>
export default {
  name: 'Menu',
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    resume() {
      const isEn = this.$i18n.locale === 'en'
      return isEn
        ? 'https://www.dropbox.com/s/3xdqpq80hrofe64/resuem_en.pdf?dl=0'
        : 'https://www.dropbox.com/s/t8gyvsmue1eq0i4/resume_tw.pdf?dl=0'
    },
  },
  methods: {
    handleToggleDawer() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<template>
  <div
    class="
      sticky
      top-3
      bg-white
      px-4
      py-6px
      rounded-full rounded-br-0
      shadow-sm
      z-1
    "
  >
    <div class="flex justify-between items-center">
      <NuxtLink :to="localePath('/')" class="flex items-center group">
        <img class="w-5 h-5 mr-1" src="../assets/logo.svg" alt="logo" />
        <span
          class="
            text-gray-500
            Variant
            Rule
            Description
            group-hover:text-blue-400
          "
          >HUGH FENG</span
        >
      </NuxtLink>
      <div
        class="
          top-4
          bg-white
          py-2
          space-x-2
          rounded-full rounded-br-0
          hidden
          lg:flex
          text-gray-600
        "
      >
        <NuxtLink
          class="
            px-4
            text-center
            hover:bg-opacity-40 hover:text-cyan-800 hover:bg-light-blue-200
            rounded-full
          "
          :to="localePath('/')"
          >{{ $t('home') }}</NuxtLink
        >
        <NuxtLink
          class="
            px-4
            text-center
            hover:bg-opacity-40 hover:text-cyan-800 hover:bg-light-blue-200
            rounded-full
          "
          :to="localePath('/info')"
          >{{ $t('info') }}</NuxtLink
        >
        <a
          class="
            px-4
            text-center
            hover:bg-opacity-40 hover:text-cyan-800 hover:bg-light-blue-200
            rounded-full
          "
          :href="resume"
          target="_blank"
          >{{ $t('resume') }}</a
        >
        <a
          class="
            px-4
            text-center
            hover:bg-opacity-40 hover:text-cyan-800 hover:bg-light-blue-200
            rounded-full
          "
          href="https://indexhui.github.io/note/blog"
          target="_blank"
          >{{ $t('article') }}</a
        >
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="
            px-4
            text-center
            hover:bg-opacity-40 hover:text-cyan-800 hover:bg-light-blue-200
            rounded-full
          "
          >{{ locale.name }}</nuxt-link
        >
        <a
          class="
            px-4
            text-center text-gray-800
            hover:text-blue-600
            rounded-full
            flex
            items-center
          "
          href="https://github.com/indexhui"
          target="_blank"
          ><Icon class="hover:text-blue-600" icon="github"
        /></a>
      </div>
      <div
        @click="handleToggleDawer"
        class="
          h-32px
          w-32px
          flex flex-col
          justify-center
          items-center
          rounded-full rounded-br-0
          static
          top-20px
          bg-white
          space-y-3px
          cursor-pointer
          lg:hidden
        "
      >
        <div class="h-2px w-20px bg-gray-400"></div>
        <div class="h-2.4px w-20px bg-gray-400"></div>
        <div class="h-2px w-20px bg-gray-400"></div>
      </div>
    </div>
    <Drawer
      class="lg:hidden"
      :isOpen="isOpen"
      :handleToggleDawer="handleToggleDawer"
    />
  </div>
</template>

<style scoped>
/* home route and active route will show in bold as it matches / and /about */
/* a.nuxt-link-active {
  color: #0284c7;
} */
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #0369a1;
}
</style>
