<template>
  <div
    class="flex justify-end border-b border-gray-200 px-3 py-2 md:px-16 md:py-6"
  >
    <Icon
      name="IconsMdiReorderHorizontal"
      class="h-8 w-8 cursor-pointer md:hidden"
      @click.native="show = true"
    />
    <ul
      class="hidden gap-y-2 bg-secondary-50 px-4 py-8 md:relative md:flex md:flex-row md:gap-x-8 md:bg-white md:px-0 md:py-0"
    >
      <li v-for="(link, index) in links" :key="index">
        <NuxtLink
          :to="link.path"
          class="cursor-pointer text-xl font-semibold text-black hover:text-primary-500"
        >
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>

    <ul
      class="fixed inset-0 flex flex-col items-center gap-4 bg-primary-100 p-4 md:hidden"
      v-if="show"
    >
      <Icon
        name="IconsMdiClose"
        class="h-8 w-8 cursor-pointer font-bold text-dark-500"
        @click.native="show = false"
      />
      <li v-for="(link, index) in links" :key="index">
        <NuxtLink
          :to="link.path"
          class="cursor-pointer text-xl font-semibold text-black"
        >
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      this.show = false
    },
  },
  data() {
    return {
      show: false,
      links: [
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'Blogs',
          path: 'blogs',
        },
        {
          label: 'Works',
          path: 'works',
        },
      ],
    }
  },
}
</script>

<style style="scss">
.nuxt-link-exact-active {
  @apply text-primary-500 font-semibold;
}
</style>
