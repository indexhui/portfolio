<script>
export default {
  name: 'Drawer',
  props: {
    isOpen: {
      type: Boolean,
    },
    handleToggleDawer: {
      type: Function,
      default: () => {},
    },
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
}
</script>

<template>
  <div>
    <div
      v-if="isOpen"
      @click.self="handleToggleDawer"
      class="
        w-screen
        h-screen
        fixed
        top-0
        left-0
        overflow-hidden
        bg-opacity-20 bg-gray-700
      "
    ></div>
    <transition name="slide-fade">
      <div
        v-if="isOpen"
        :class="[{ 'translate-x-0': isOpen }, { '-translate-x-3/5': !isOpen }]"
        class="w-3/4 h-screen top-0 fixed bg-white px-8 py-8 right-0 shadow-md"
      >
        <div class="my-2 w-1/2 text-gray-600" @click.stop="handleToggleDawer">
          <Icon icon="close" size="20" class="cursor-pointer" />
        </div>
        <div class="space-y-2 flex flex-col">
          <NuxtLink class="text-gray-700" :to="localePath('/')">{{
            $t('home')
          }}</NuxtLink>
          <NuxtLink class="text-gray-700" :to="localePath('/info')">{{
            $t('info')
          }}</NuxtLink>
          <a class="text-gray-700" :href="resume" target="_blank">{{
            $t('resume')
          }}</a>
          <a
            class="text-gray-700"
            href="https://indexhui.github.io/note/blog"
            target="_blank"
            >{{ $t('article') }}</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(250px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

a.nuxt-link-exact-active {
  color: #0369a1;
}
</style>
