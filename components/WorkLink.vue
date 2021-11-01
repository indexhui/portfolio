<template>
  <div class="flex my-8 space-x-5 <md:flex-col <md:space-x-0 <md:space-y-5">
    <a
      :href="link"
      target="_blank"
      class="
        w-280px
        border-1
        rounded-full
        text-center text-gray-600 text-xl
        font-semibold
        py-4
        border-gray-200
        bg-white
        hover:shadow-lg
      "
    >
      {{ $t(name) }}
    </a>
    <a
      :href="github"
      target="_blank"
      class="
        w-280px
        border-1
        rounded-full
        text-center text-gray-600 text-xl
        font-semibold
        py-4
        border-gray-200
        bg-white
        hover:shadow-lg
      "
    >
      Github
    </a>
  </div>
</template>

<script>
export default {
  name: 'WorkLink',
  props: {
    name: {
      type: String,
    },
    link: {
      type: String,
    },
    github: {
      type: String,
    },
  },
}
</script>

<style></style>
