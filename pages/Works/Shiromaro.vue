<script>
export default {
  scrollToTop: true,
  asyncData() {
    const shiromaro = {
      name: 'shiromaroName',
      duration: 'shiromaroDuration',
      role: 'f2e',
      framework: 'React',
      link: 'https://www.shiromaro.studio/#/shiromaker',
      github: 'https://github.com/indexhui/shikamaro_code',
    }
    return {
      shiromaro,
    }
  },
}
</script>

<template>
  <div class="p-2 flex flex-col items-center <md:p-0">
    <img
      class="w-full h-300px object-cover rounded-2xl <md:h-180px"
      src="../../assets/works/shiro/cover.jpg"
      alt=""
    />
    <PanelOverview :project="shiromaro" />
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
        小白頭貼生成器，是和動畫家小白合作的專案。讓喜歡小白畫風的受眾，可以選擇想要的造型捏出自己的腳色。在萬聖節的時候還加入了萬聖節的元素，總共有上千種組合，來滿足粉絲的想像。
      </div>
    </div>
    <div class="flex flex-col w-720px my-5 <md:w-full">
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
          <li>React</li>
          <li>merge-images</li>
          <li>glob</li>
          <li>chakra-ui</li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col w-720px my-5 <md:w-full">
      <div
        class="
          font-semibold
          text-3xl text-blue-gray-600
          py-1
          border-b-2
          w-full
          <md:text-2xl
        "
      >
        成果
      </div>
      <div class="py-2 text-gray-700 text-2xl <md:text-xl <md:leading-normal">
        小白頭貼生成器，是和動畫家小白合作的專案。讓喜歡小白畫風的受眾，可以選擇想要的造型捏出自己的腳色。在萬聖節的時候還加入了萬聖節的元素，總共有上千種組合，來滿足粉絲的想像。
      </div>
    </div>
    <div class="grid grid-cols-[1fr] w-720px gap-x-4 <md:w-full">
      <div class="col-span-1">
        <img
          class="w-full h-280px object-cover rounded-xl <md:h-120px"
          src="../../assets/works/shiro/data.jpg"
          alt="post"
        />
        <div class="text-center py-3 text-gray-600 text-lg tracking-wider">
          Instagram、GA
        </div>
      </div>
    </div>
    <WorkLink
      :name="shiromaro.name"
      :link="shiromaro.link"
      :github="shiromaro.github"
    />
    <div class="flex flex-col w-720px my-5 <md:w-full">
      <div
        class="
          font-semibold
          text-3xl text-blue-gray-600
          py-1
          border-b-2
          w-full
          <md:text-2xl
        "
      >
        心得和反思
      </div>
      <div class="py-2 text-gray-700 text-2xl <md:text-xl <md:leading-normal">
        在此專案之前，原先是透過 DevProjects 上找到 Alpaca image generator
        作為前端小練習題目。在發想後和 Shiromaro
        合作製作以它為主題頭像生成器。面對的挑戰是需要引入的圖檔很多，解決方案是透過
        glob 讀取路徑下所有資料夾和其圖檔，來完成諸多的圖片路徑。
      </div>
    </div>
    <div class="grid grid-cols-[1fr] w-720px gap-x-4 <md:w-full">
      <div class="col-span-1">
        <img
          class="w-full h-280px object-cover rounded-xl <md:h-120px"
          src="../../assets/works/shiro/glob.png"
          alt="post"
        />
        <a
          href="https://github.com/isaacs/node-glob"
          target="_blank"
          class="
            w-full
            block
            text-center
            py-3
            text-gray-600 text-lg
            tracking-wider
            underline underline-offset-4 underline-opacity-30 underline-gray-700
            hover:underline-light-blue-600
          "
        >
          node-glob
        </a>
      </div>
    </div>
  </div>
</template>

<style></style>
