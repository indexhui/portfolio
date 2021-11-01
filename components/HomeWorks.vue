<script>
export default {
  name: 'HomeWork',
  props: {
    f2eWorks: {
      type: Array,
    },
    uiuxWorks: {
      type: Array,
    },
  },
}
</script>

<template>
  <div class="my-4">
    <div class="my-4 mt-8 text-gray-500 text-lg">Work #F2E</div>
    <div
      class="
        grid grid-cols-[1fr,1fr]
        gap-x-6 gap-y-10
        <md:grid-cols-[1fr] <md:gap-y-4
      "
    >
      <CardWork v-for="work in f2eWorks" :key="work.name" :work="work" />
    </div>
    <div class="my-4 mt-8 text-gray-500 text-lg">Work #UIUX</div>
    <div
      class="grid grid-cols-[1fr,1fr,,1fr] gap-x-6 gap-y-6 <md:grid-cols-[1fr]"
    >
      <CardWork v-for="work in uiuxWorks" :key="work.name" :work="work" />
    </div>
  </div>
</template>

<style></style>
