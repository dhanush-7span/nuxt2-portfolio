<template>
  <div class="bg-secondary-50 py-5">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <p class="text-xl font-bold text-dark-500">Recent posts</p>
        <NuxtLink to="/blogs" class="text-secondary-500">View All</NuxtLink>
      </div>

      <div class="mt-2 flex flex-col gap-5 md:flex-row">
        <div
          class="box-shadow w-full rounded bg-white p-3 md:w-1/2 md:p-5"
          v-for="(post, index) in posts"
          :key="index"
        >
          <p class="mt-3 text-2xl font-bold leading-10 text-dark-500">
            {{ post.title }}
          </p>
          <div class="mt-3 gap-x-3">
            <span class="text-base text-dark-300">{{ post.date }}</span>
            <span class="text-base text-dark-300 md:mx-6">|</span>
            <span class="text-base text-dark-300">{{ post.tags }}</span>
          </div>
          <p class="mt-3 text-base leading-6 text-dark-500">
            {{ post.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          title: "Making a design system from scratch",
          date: "12 Feb 2020",
          tags: "Design, Pattern",
          desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
        {
          title: "Creating pixel perfect icons in Figma",
          date: "12 Feb 2020",
          tags: "Figma, Icon Design",
          desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.box-shadow {
  box-shadow: 0px 4px 10px rgba(187, 225, 250, 0.25);
}
</style>
