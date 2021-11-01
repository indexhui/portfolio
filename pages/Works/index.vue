<template>
  <div>預設頁面</div>
</template>

<script>
export default {
  layout: 'default',
  asyncData() {
    const f2eWorks = [
      {
        name: 'workSimpleTwitterName',
        time: 'workSimpleTwitterTime',
        src: 'twitter.jpg',
        url: require('~/assets/works/twitter.jpg'),
        path: '/works/simpleTwitter',
      },
      {
        name: 'shiromaroName',
        time: 'shiromaroTime',
        url: require('~/assets/works/shiro/shiro_card.jpg'),
        path: '/works/simpleTwitter',
      },
      {
        name: 'workSimpleTwitterName',
        time: 'workSimpleTwitterTime',
        src: 'twitter.jpg',
        url: require('~/assets/works/twitter.jpg'),
        path: '/works/simpleTwitter',
      },
      {
        name: 'workSimpleTwitterName',
        time: 'workSimpleTwitterTime',
        src: 'twitter.jpg',
        url: require('~/assets/works/twitter.jpg'),
        path: '/works/simpleTwitter',
      },
    ]

    const uiuxWorks = [
      {
        name: 'workSimpleTwitterName',
        time: 'workSimpleTwitterTime',
        src: 'twitter.jpg',
        url: require('~/assets/works/twitter.jpg'),
        path: '/works/simpleTwitter',
      },
      {
        name: 'workSimpleTwitterName',
        time: 'workSimpleTwitterTime',
        src: 'twitter.jpg',
        url: require('~/assets/works/twitter.jpg'),
        path: '/works/simpleTwitter',
      },
      {
        name: 'workSimpleTwitterName',
        time: 'workSimpleTwitterTime',
        src: 'twitter.jpg',
        url: require('~/assets/works/twitter.jpg'),
        path: '/works/simpleTwitter',
      },
    ]
    return {
      f2eWorks,
      uiuxWorks,
    }
  },
}
</script>

<style></style>
