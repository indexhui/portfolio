<script>
export default {
  name: 'InfoExperience',
  props: {
    experiences: {
      type: Array,
    },
  },
}
</script>

<template>
  <div class="py-2">
    <div class="my-4 mt-8 text-gray-500 text-lg">{{ $t('experience') }}</div>
    <div
      class="
        grid grid-cols-[1fr,1fr]
        gap-x-6 gap-y-6
        <md:grid-cols-[1fr] <md:gap-y-4
      "
    >
      <CardExperience
        v-for="experience in experiences"
        :key="experience.name"
        :experience="experience"
      />
    </div>
  </div>
</template>
