<script>
export default {
  scrollToTop: true,
  asyncData() {
    const subscription = {
      name: 'subscriptionName',
      duration: 'subscriptionDuration',
      role: 'f2e',
      framework: 'React、Airtable API',
      link: 'https://indexhui.github.io/subscription-management/',
      github: 'https://github.com/indexhui/subscription-management',
    }
    return {
      subscription,
    }
  },
}
</script>

<template>
  <div class="p-2 flex flex-col items-center <md:p-0">
    <img
      class="w-full h-300px object-cover rounded-2xl <md:h-120px"
      src="../../assets/works/subscriptionManagement/cover.jpg"
      alt=""
    />
    <PanelOverview :project="subscription" />
    <div class="flex flex-col w-720px my-3 <md:w-full">
      <div
        class="
          font-semibold
          text-gray-700 text-3xl
          py-1
          border-b-2
          w-full
          <md:text-2xl
        "
      >
        專案概要
      </div>
      <div class="py-2 text-gray-700 text-2xl <md:text-xl <md:leading-normal">
        2021 年初參加了 PJ 老師，React
        專案應用直播班。發想了一個小工具來做為練習。最後嘗試使用 Airtable API
        練習資料串接。
      </div>
    </div>
    <div class="grid grid-cols-[1fr] w-720px gap-y-4 <md:w-full">
      <div class="col-span-1">
        <img
          class="
            w-full
            h-280px
            object-cover
            rounded-xl rounded-br-0
            <md:h-160px
          "
          src="../../assets/works/subscriptionManagement/airtable.jpg"
          alt="post"
        />
        <div
          class="
            w-full
            block
            text-center
            py-3
            text-gray-600 text-lg
            tracking-wider
          "
        >
          Airtable API
        </div>
      </div>
      <div class="col-span-1">
        <img
          class="
            w-full
            h-280px
            object-cover
            rounded-xl rounded-bl-0
            <md:h-160px
          "
          src="../../assets/works/subscriptionManagement/demo.jpg"
          alt="post"
        />
        <div
          class="
            w-full
            block
            text-center
            py-3
            text-gray-600 text-lg
            tracking-wider
          "
        >
          Demo
        </div>
      </div>
    </div>
    <WorkLink
      :name="subscription.name"
      :link="subscription.link"
      :github="subscription.github"
    />
  </div>
</template>
