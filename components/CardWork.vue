<script>
export default {
  name: 'CardWork',
  props: {
    work: {
      type: Object,
    },
  },
}
</script>

<template>
  <div>
    <a
      v-if="work.link"
      :href="work.link"
      target="_blank"
      class="group col-span-1"
    >
      <div class="w-full aspect-w-16 aspect-h-9">
        <img
          :src="work.url"
          :alt="work.name"
          class="
            object-cover
            rounded-xl rounded-bl-0
            group-hover:shadow-xl
            transition
          "
        />
      </div>
      <div class="mt-16px flex items-center space-x-2 text-gray-700 <md:mt-8px">
        <div
          class="
            text-lg
            font-semibold
            text-gray-800
            group-hover:text-light-blue-600
          "
        >
          {{ $t(work.name) }}
        </div>
        <div class="text-sm text-gray-500">{{ $t(work.time) }}</div>
      </div>
    </a>
    <NuxtLink
      v-if="!work.link"
      :to="localePath(work.path)"
      class="group col-span-1"
    >
      <div class="w-full aspect-w-16 aspect-h-9">
        <img
          :src="work.url"
          :alt="work.name"
          class="
            object-cover
            rounded-xl rounded-bl-0
            group-hover:shadow-xl
            transition
          "
        />
      </div>
      <div class="mt-16px flex items-center space-x-2 text-gray-700 <md:mt-8px">
        <div
          class="
            text-lg
            font-semibold
            text-gray-800
            group-hover:text-light-blue-600
          "
        >
          {{ $t(work.name) }}
        </div>
        <div class="text-sm text-gray-500">{{ $t(work.time) }}</div>
      </div>
    </NuxtLink>
  </div>
</template>

<style></style>
