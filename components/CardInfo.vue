<script>
export default {
  name: 'CardInfo',
  props: {
    edu: {
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
          {{ $t(edu.name) }}
        </div>
        <div>{{ $t(edu.date) }}</div>
      </div>
      <img class="w-60px rounded-2xl" :src="edu.src" alt="crosspoint" />
    </div>
    <div>
      {{ $t(edu.content) }}
    </div>
  </div>
</template>
