<script lang="ts" setup>
  useHead({
    title: 'Home',
    meta: [
      { 
        name: 'description', 
        content: 'Home Nuxt 3, IT Genius Engineering' 
      },
      {
        name: 'keywords',
        content: 'Home, Nuxt 3, Learning Nuxt 3'
      },
    ],
  })
</script>

<template>
  <div>
    
    <section
      id="hero"
      class="bg-skin-fill sm:h-screen grid place-items-center -mt-1 sm:mt-0 hero-default"
    >
      <div
        class="container mx-auto px-4 xl:px-0 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-20"
      >
        <!--ส่วนด้านซ้าย-->
        <div class="w-full sm:w-6/12">
          <h1 class="text-4xl sm:text-4xl font-bold xl:leading-[4rem] text-skin-base">
            Nuxt 3 Tailwind : ค้นหาผู้ผ่านการฝึกอาชีพพื้นที่ใกล้บ้าน
          </h1>
          <p class="text-xl mt-4 mb-14 text-skin-muted">
            Nuxt 3 + Tailwind CSS for Starter kit
          </p>
          <div class="space-x-4">
            <button class="btn btn-primary btn-xl">
              Get Starte
            </button>
          </div>
        </div>
        <!--ส่วนด้านขวา-->
        <div class="w-full sm:w-6/12 flex justify-center p-6 sm:p-0">
          <img loading="lazy" src="~/assets/images/sunf2.png" alt="" class="w-auto rounded-lg ">
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped></style>
