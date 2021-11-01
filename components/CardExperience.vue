<script>
export default {
  name: 'CardExperience',
  props: {
    experience: {
      type: Object,
    },
  },
}
</script>

<template>
  <div class="col-span-1 bg-white rounded-2xl rounded-br-0 p-4">
    <div class="flex justify-between">
      <div>
        <div class="text-lg font-semibold text-cyan-700">
          {{ $t(experience.name) }}
        </div>
        <div>{{ $t(experience.date) }}</div>
      </div>
      <img class="w-60px rounded-2xl" :src="experience.src" alt="crosspoint" />
    </div>
    <div>{{ $t(experience.title) }}</div>
    <div>
      {{ $t(experience.content) }}
    </div>
  </div>
</template>
