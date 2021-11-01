<template>
  <div class="relative flex justify-center bg-gray-100 min-h-screen pt-6 z-1">
    <div class="w-4xl 2xl:w-6xl <lg:w-full <sm:px-4">
      <Menu />
      <Nuxt />
      <HomeFooter />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
body {
  font-family: Noto Sans TC, Helvetica, Arial, sans-serif;
}
::selection {
  background: #70b4d5;
  color: white;
}

.rounded-br-0 {
  border-bottom-right-radius: 0;
}

.rounded-bl-0 {
  border-bottom-left-radius: 0;
}
</style>
