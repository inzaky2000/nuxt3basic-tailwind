<script setup lang="ts">
useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Home, Nuxt 3 ,IT Learning Center",
    },
    {
      name: "keywords",
      content: "Home, Nuxt 3 ,Learning Nuxt 3",
    },
    {
      name: "author",
      content: "Home, Nuxt 3 ,Learning Nuxt 3",
    },
  ],
});
</script>

<template>
  <!--<div class="flex justify-center items-center h-screen">
    <h1 class="text-3xl font-bold text-blue-700 animate-bounce">
      Hello Nuxt3
    </h1>
  </div>
-->
  <Head>
    <Link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
    />
  </Head>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

