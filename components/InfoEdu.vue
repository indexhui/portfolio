<script>
export default {
  name: 'InfoEdu',
  props: {
    edus: {
      type: Array,
    },
  },
}
</script>

<template>
  <div class="py-2">
    <div class="my-4 mt-8 text-gray-500 text-lg">{{ $t('edu') }}</div>
    <div
      class="
        grid grid-cols-[1fr,1fr,1fr]
        gap-x-6 gap-y-6
        <md:grid-cols-[1fr] <md:gap-y-4
      "
    >
      <CardInfo v-for="edu in edus" :key="edu.name" :edu="edu" />
    </div>
  </div>
</template>
