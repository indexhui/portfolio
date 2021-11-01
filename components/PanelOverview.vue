<script>
export default {
  name: 'PanelOverview',
  props: {
    project: {
      type: Object,
    },
  },
}
</script>

<template>
  <div
    class="
      bg-white
      w-full
      min-h-120px
      rounded-xl
      px-8
      py-4
      my-4
      rounded-bl-0
      <md:px-4
    "
  >
    <div class="font-semibold pb-2 text-lg text-gray-600">
      {{ $t(project.name) }}
    </div>
    <div class="flex justify-between <md:flex-col <md:space-x-0 <md:space-y-2">
      <div v-if="project.duration" class="flex-1">
        <div class="text-gray-500 text-sm">{{ $t('duration') }}</div>
        <div class="font-semibold text-gray-700">
          {{ $t(project.duration) }}
        </div>
      </div>
      <div v-if="project.role" class="flex-1">
        <div class="text-gray-600 text-sm">{{ $t('role') }}</div>
        <div class="font-semibold text-gray-700">{{ $t(project.role) }}</div>
      </div>
      <div v-if="project.framework" class="flex-1">
        <div class="text-gray-500 text-sm">{{ $t('framework') }}</div>
        <div class="font-semibold text-gray-700">{{ project.framework }}</div>
      </div>
      <div v-if="project.link" class="flex-1">
        <a
          class="
            flex
            items-center
            text-gray-600
            underline-offset-3
            hover:underline
            hover:underline-solid
            hover:underline-cyan-600
            hover:text-cyan-600
          "
          :href="project.link"
          target="_blank"
        >
          專案網址
          <Icon class="ml-1" size="16" icon="globe" />
        </a>
      </div>
      <div v-if="project.github" class="flex-1">
        <a
          class="
            flex
            items-center
            text-gray-600
            underline-offset-3
            hover:underline
            hover:underline-solid
            hover:underline-cyan-600
            hover:text-cyan-600
          "
          :href="project.github"
          target="_blank"
          >Github
          <Icon class="ml-1" size="16" />
          <!-- <img class="w-16px ml-1" src="../assets/icons/github.svg" alt=""
        /> -->
        </a>
      </div>
    </div>
  </div>
</template>

<style></style>
