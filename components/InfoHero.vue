<template>
  <div class="py-6 flex items-center <md:flex-col <md:items-start">
    <img
      class="w-300px rounded-2xl rounded-br-0"
      src="../assets/hugh_avatar.jpg"
      alt=""
    />
    <div
      class="
        text-xl
        leading-relaxed
        w-500px
        pl-100px
        <md:pl-0 <md:w-auto <md:pt-3
      "
    >
      <h3
        class="
          text-xl text-gray-700
          tracking-wider
          <sm:text-base
          leading-relaxed
        "
      >
        <span class="text-gray-600">{{ $t('mottoS1') }}</span>
        <span class="font-semibold">{{ $t('mottoS2') }}</span>
        <span class="text-gray-600">{{ $t('mottoS3') }}</span>
        <span class="font-semibold">{{ $t('mottoS4') }}</span>
      </h3>
      <div class="text-xl text-gray-700 <sm:text-base leading-relaxed">
        {{ $t('intro') }}
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
