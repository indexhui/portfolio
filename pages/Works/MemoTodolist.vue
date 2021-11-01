<script>
export default {
  scrollToTop: true,
  asyncData() {
    const memo = {
      name: 'memoName',
      duration: 'memoTime',
      role: 'f2e',
      framework: 'Vue3、tailwindcss',
      link: 'https://indexhui.github.io/subscription-management/',
      github: 'https://github.com/indexhui/subscription-management',
    }
    return {
      memo,
    }
  },
}
</script>

<template>
  <div class="p-2 flex flex-col items-center <md:p-2">
    <img
      class="w-full h-300px object-cover rounded-2xl <md:h-200px"
      src="../../assets/works/memo/cover.jpg"
      alt=""
    />
    <PanelOverview :project="memo" />
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
        {{ $t('brief') }}
      </div>
      <div class="py-2 text-gray-700 text-2xl <md:text-xl <md:leading-normal">
        八月的 Alpha Camp 前端課程，以 TodoMVC 示範 Vue2
        。預讀期間，跟著實做一遍，其中嘗試了 Vue3 和
        tailwindcss。以及自己想嘗試的設計風格 - 便利貼。
      </div>
    </div>
    <WorkLink :name="memo.name" :link="memo.link" :github="memo.github" />
  </div>
</template>
