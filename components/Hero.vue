<template>
  <div class="my-20">
    <div class="mt-64px space-y-1">
      <h2 class="text-xl font-medium text-gray-600 tracking-wider">
        {{ $t('hello') }}
      </h2>
      <h3 class="text-lg text-gray-700 tracking-wider <sm:text-base">
        <span class="text-gray-600">{{ $t('mottoS1') }}</span>
        <span class="font-semibold">{{ $t('mottoS2') }}</span>
        <span class="text-gray-600">{{ $t('mottoS3') }}</span>
        <span class="font-semibold">{{ $t('mottoS4') }}</span>
      </h3>
      <div class="text-lg text-gray-700 <sm:text-base">
        {{ $t('intro') }}
      </div>
    </div>
    <img
      class="
        object-cover
        h-100px
        <sm:w-full
        md:w-400px
        my-32px
        rounded-2xl rounded-bl-0
      "
      src="../assets/hero.jpg"
      alt=""
    />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
