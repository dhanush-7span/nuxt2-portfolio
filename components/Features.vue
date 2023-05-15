<template>
  <div class="container mx-auto bg-white">
    <div class="flex justify-between py-3">
      <p class="text-center text-xl font-bold text-dark-500">Featured works</p>
      <NuxtLink to="/works" class="text-secondary-500">View All</NuxtLink>
    </div>
    <div>
      <div
        class="border-b border-gray-200 py-5 first:pt-0"
        v-for="(feature, index) in features"
        :key="index"
      >
        <Feature :data="feature" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: "Designing Dashboards",
          image: "post-1.png",
          year: "2020",
          type: "Dashboard",
          desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
          title: "Vibrant Portraits of 2020",
          image: "post-2.png",
          year: "2018",
          type: "Illustration",
          desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
          title: "36 Days of Malayalam type",
          image: "post-3.png",
          year: "2020",
          type: "Typography",
          desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
      ],
    };
  },
};
</script>
