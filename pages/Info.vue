<script>
export default {
  layout: 'default',
  asyncData() {
    const experiences = [
      {
        name: 'realengine',
        date: 'realengineDate',
        content: 'realengineWork',
        src: require('~/assets/brands/real.jpg'),
        title: 'advisory',
      },
      {
        name: 'crosspoint',
        date: 'crosspointDate',
        content: 'crosspointWork',
        title: 'designer',
        src: require('~/assets/brands/crosspoint.jpg'),
      },
      {
        name: 'sov',
        date: 'sovDate',
        content: 'sovWork',
        title: 'uiux',
        src: require('~/assets/brands/sov.jpg'),
      },
      {
        name: 'relab',
        date: 'relabDate',
        content: 'relabWork',
        title: 'intern',
        src: require('~/assets/brands/relab.jpg'),
      },
    ]
    const edus = [
      {
        name: 'alphacamp',
        date: 'alphacampDate',
        content: 'alphacampContent',
        src: require('~/assets/brands/alphacamp.jpg'),
      },
      {
        name: 'ntue',
        date: 'ntueDate',
        content: 'ntueContent',
        src: require('~/assets/brands/ntue.jpg'),
      },
    ]
    const honors = [
      {
        name: 'xuemi',
        date: 'xuemiDate',
        src: require('~/assets/brands/xuemi.jpg'),
      },
      {
        name: 'aapd',
        date: 'champion',
        src: require('~/assets/brands/aapd.jpg'),
      },
      {
        name: 'uiclub',
        date: 'champion',
        src: require('~/assets/brands/uiclub.jpg'),
      },
    ]
    return {
      experiences,
      edus,
      honors,
    }
  },
}
</script>

<template>
  <div>
    <InfoHero />
    <InfoExperience :experiences="experiences" />
    <InfoEdu :edus="edus" />
    <InfoHonor :honors="honors" />
  </div>
</template>

<style></style>
