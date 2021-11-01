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
        path: '/works/shiromaro',
      },
      {
        name: 'subscriptionName',
        time: 'subscriptionTime',
        url: require('~/assets/works/subscriptionManagement/card_cover.jpg'),
        path: '/works/subscriptionManagement',
      },
      {
        name: 'memoName',
        time: 'memoTime',
        url: require('~/assets/works/memo/memo.jpg'),
        path: '/works/memotodolist',
      },
    ]

    const uiuxWorks = [
      {
        name: 'womanyName',
        time: 'womanyTime',
        link: 'https://www.behance.net/gallery/64428637/-womany-EC-showcase',
        url: require('~/assets/works/womany.png'),
        path: '/works/simpleTwitter',
      },
      {
        name: 'twbName',
        time: 'twbTime',
        link: 'https://www.behance.net/gallery/51615403/2017',
        url: require('~/assets/works/twb.png'),
        path: '/works/simpleTwitter',
      },
      {
        name: 'sovName',
        time: 'sovTime',
        src: 'twitter.jpg',
        link: 'https://www.behance.net/gallery/71249629/SOV-website-UXUI-Design',
        url: require('~/assets/works/sov.png'),
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

<template>
  <div>
    <Hero />
    <HomeWorks :f2eWorks="f2eWorks" :uiuxWorks="uiuxWorks" />
    <HomeEvent />
    <HomeArticle />
  </div>
</template>
