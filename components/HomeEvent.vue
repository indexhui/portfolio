<script>
export default {
  name: 'HomeEvent',
  // props: {
  //   events: {
  //     type: Array,
  //   },
  // },
}
</script>

<template>
  <div class="py-4">
    <div class="my-4 mt-8 text-gray-500 text-lg">Events</div>
    <div class="grid grid-cols-[1fr,1fr] gap-x-4 gap-y-4 <md:grid-cols-[1fr]">
      <div class="bg-white col-span-1 p-6 rounded-2xl">
        <div class="flex justify-between items-center">
          <div>
            <div
              class="
                text-md
                font-semibold
                text-gray-700
                space-x-2
                mb-1
                <md:space-x-0 <md:flex-col
              "
            >
              <span>{{ $t('xuemi') }}</span>
              <span>{{ $t('xuemiDate') }}</span>
            </div>
            <div class="text-gray-600">{{ $t('xuemiContent') }}</div>
            <div class="text-gray-600">{{ $t('xuemiInfo') }}</div>
          </div>
          <img
            class="w-72px h-72px rounded-full <md:w-48px <md:h-48px"
            src="../assets/brands/xuemi.jpg"
            alt="xuemi"
          />
        </div>
      </div>
      <div class="bg-white col-span-1 p-6 rounded-2xl">
        <div class="flex justify-between items-center">
          <div>
            <div
              class="
                text-md
                font-semibold
                text-gray-700
                space-x-2
                mb-1
                flex
                <md:space-x-0 <md:flex-col
              "
            >
              <div>{{ $t('shiro') }}</div>
              <div class="<md:text-sm <md:text-gray-500">
                {{ $t('shiroDuration') }}
              </div>
            </div>
            <div class="text-gray-600 <md:text-sm">
              {{ $t('shiroContent') }}
            </div>
            <NuxtLink
              class="
                text-gray-600
                <md:text-sm
                underline-offset-3
                hover:underline
                hover:underline-solid
                hover:underline-cyan-600
                hover:text-cyan-600
              "
              :to="localePath('/works/shiromaro')"
              >{{ $t('shiroInfo') }}</NuxtLink
            >
          </div>
          <img
            class="w-72px h-72px rounded-full <md:w-48px <md:h-48px"
            src="../assets/brands/shiromaro.jpg"
            alt="Shiromaro"
          />
        </div>
      </div>
      <div class="bg-white col-span-1 p-6 rounded-2xl">
        <div class="flex justify-between items-center">
          <div>
            <div class="text-md font-semibold text-gray-700 space-x-2 mb-1">
              <span>{{ $t('aapd') }}</span>
            </div>
            <div class="text-gray-600">{{ $t('champion') }}</div>
            <a
              href="https://indexhui.medium.com/aapd%E4%BB%8B%E9%9D%A2-redesign-%E6%8C%91%E6%88%B0%E8%B3%BD%E8%B3%BD%E5%BE%8C%E5%B0%8F%E8%A8%98-29925f10671d"
              target="_blank"
              class="
                text-gray-600
                underline-offset-3
                hover:underline
                hover:underline-solid
                hover:underline-cyan-600
                hover:text-cyan-600
              "
              >{{ $t('retrospect') }}</a
            >
          </div>
          <img
            class="w-72px h-72px rounded-full <md:w-48px <md:h-48px"
            src="../assets/brands/aapd.jpg"
            alt="aapd"
          />
        </div>
      </div>
      <div class="bg-white col-span-1 p-6 rounded-2xl">
        <div class="flex justify-between items-center">
          <div>
            <div class="text-md font-semibold text-gray-700 space-x-2 mb-1">
              <span>{{ $t('uiclub') }}</span>
            </div>
            <div class="text-gray-600">{{ $t('champion') }}</div>
            <a
              href="https://youtu.be/4sn2nh5HT8k?t=4654"
              target="_blank"
              class="
                text-gray-600
                underline-offset-3
                hover:underline
                hover:underline-solid
                hover:underline-cyan-600
                hover:text-cyan-600
              "
              >{{ $t('retrospect') }}</a
            >
          </div>
          <img
            class="w-72px h-72px rounded-full"
            src="../assets/brands/uiclub.jpg"
            alt="uiclub"
          />
        </div>
      </div>
    </div>
  </div>
</template>
