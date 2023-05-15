<template>
  <div class="gap-5 md:flex">
    <div class="flex-shrink-0">
      <img
        :src="require(`~/assets/images/${data.image}`)"
        alt="post"
        class="h-60 w-full md:h-44 md:w-60"
      />
    </div>
    <div>
      <p class="my-4 font-bold text-dark-500 md:mt-0 md:text-3xl">
        {{ data.title }}
      </p>
      <div>
        <span
          class="rounded-2xl bg-dark-400 px-2 py-1 text-sm font-bold text-white"
          >{{ data.year }}</span
        >
        <span class="ml-5 leading-6 text-light-500">{{ data.type }}</span>
      </div>
      <p class="mt-6 text-dark-500">
        {{ data.desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>
