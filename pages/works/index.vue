<template>
  <div class="container">
    <h3 class="py-4 text-3xl font-bold text-dark-500">Works</h3>
    <div>
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="border-b border-gray-200 py-5 first:pt-0"
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
