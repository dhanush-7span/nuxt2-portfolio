<template>
  <div class="container">
    <h3 class="py-4 text-3xl font-bold text-dark-500">Blogs</h3>
    <div>
      <div
        v-for="(blog, index) in blogs"
        :key="index"
        class="border-b border-gray-200 py-6 first:pt-0"
      >
        <p class="text-2xl font-medium leading-10 text-dark-500">
          {{ blog.title }}
        </p>
        <div class="mt-1">
          <span class="leading-6 text-dark-500">{{ blog.date }}</span>
          <span class="mx-4">|</span>
          <span class="leading-6 text-light-500">{{ blog.tags }}</span>
        </div>
        <p class="mt-4 leading-6 text-dark-500">
          {{ blog.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          title: "UI Interactions of the week",
          date: "12 Feb 2019",
          tags: "Express, Handlebars",
          desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
          title: "UI Interactions of the week",
          date: "12 Feb 2019",
          tags: "Express, Handlebars",
          desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
          title: "UI Interactions of the week",
          date: "12 Feb 2019",
          tags: "Express, Handlebars",
          desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
          title: "UI Interactions of the week",
          date: "12 Feb 2019",
          tags: "Express, Handlebars",
          desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
      ],
    };
  },
};
</script>
