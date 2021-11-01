<script>
export default {
  scrollToTop: true,
  layout: 'default',
  name: 'simpleTwitter',
  asyncData() {
    const simpleTwitter = {
      name: 'workSimpleTwitterName',
      duration: 'simpleTwitterDuration',
      role: 'f2e',
      framework: 'Vue2',
      link: 'https://williamtsou818.github.io/simple-twitter-frontend/#/',
      github: 'https://github.com/WilliamTsou818/simple-twitter-frontend',
    }
    return {
      simpleTwitter,
    }
  },
}
</script>
<template>
  <div class="p-2 flex flex-col items-center">
    <img
      class="w-full h-240px object-cover rounded-2xl <md:h-180px"
      src="../../assets/works/twitter/cover.jpg"
      alt=""
    />
    <PanelOverview :project="simpleTwitter" />

    <div class="flex flex-col w-720px my-3 <md:w-full">
      <div
        class="
          font-semibold
          text-3xl text-gray-700
          py-1
          border-b-2
          w-full
          <md:text-2xl
        "
      >
        專案概要
      </div>
      <div class="py-2 text-gray-700 text-2xl <md:text-xl <md:leading-normal">
        Aphitter (Simple Twitter) 是一個功能類似於 Twitter
        的社群網站，使用者可以進行帳號註冊、登入、編輯個人頁面、發推文、按讚、留言、追蹤其他用戶等等操作。而管理員能夠登入後台，瀏覽所有用戶與推文，並擁有刪除推文的權限。
      </div>
    </div>
    <div class="flex flex-col w-720px my-4 <md:w-full">
      <div
        class="
          font-semibold
          text-3xl text-gray-700
          py-1
          border-b-2
          w-full
          <md:text-2xl
        "
      >
        功能介紹
      </div>
      <div>
        <ul
          class="
            py-2
            text-gray-700
            list-square
            w-full
            pl-4
            space-y-1
            text-2xl
            <md:text-xl <md:leading-normal
          "
        >
          <li>使用者可以進行帳號註冊、登入、編輯個人頁面</li>
          <li>使用者可以發推文、按讚、留言、觀看推文、追蹤其他用戶</li>
          <li>管理員可以瀏覽所有用戶和推文</li>
          <li>使用者可以分別進入公開聊天室與私人訊息查看歷史聊天紀錄</li>
          <li>使用者可以在公開聊天室裡看到聊天室所有用戶並進行即時聊天</li>
          <li>使用者可以在指定用戶的個人資訊頁面點選私訊按鈕發起私人聊天</li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-[1fr,1fr] gap-x-4 py-8 <md:grid-cols-[1fr]">
      <div class="col-span-1">
        <img
          class="w-full h-280px object-cover rounded-xl <md:h-200px"
          src="../../assets/works/twitter/post.gif"
          alt="post"
        />
        <div class="text-center py-3 text-gray-600 text-lg tracking-wider">
          新增推文
        </div>
      </div>
      <div class="col-span-1">
        <img
          class="w-full h-280px object-cover rounded-xl <md:h-200px"
          src="../../assets/works/twitter/chat.gif"
          alt="post"
        />
        <div class="text-center py-3 text-gray-600 text-lg tracking-wider">
          即時聊天室
        </div>
      </div>
    </div>

    <div class="flex flex-col w-720px my-4 <md:w-full">
      <div class="font-semibold text-3xl py-1 border-b-2 w-full <md:text-2xl">
        框架和套件
      </div>
      <div>
        <ul
          class="
            py-2
            text-gray-700
            list-square
            w-full
            pl-4
            space-y-1
            text-2xl
            <md:text-xl <md:leading-normal
          "
        >
          <li>Vue</li>
          <li>vue-notification</li>
          <li>day.js</li>
          <li>vue-socket.io</li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col w-720px my-4 <md:w-full">
      <div class="font-semibold text-3xl py-1 border-b-2 w-full <md:text-2xl">
        團隊成員
      </div>
      <div>
        <ul
          class="
            py-2
            text-gray-700
            list-square
            w-full
            pl-4
            space-y-1
            text-2xl
            <md:text-xl <md:leading-normal
          "
        >
          <li>Hugh (前端)</li>
          <li>PINPIN (前端)</li>
          <li>WilliamTsou (後端)</li>
          <li>Avery (後端)</li>
        </ul>
      </div>
    </div>
    <WorkLink
      :name="simpleTwitter.name"
      :link="simpleTwitter.link"
      :github="simpleTwitter.github"
    />
  </div>
</template>
