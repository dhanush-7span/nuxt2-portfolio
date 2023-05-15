<template>
  <component :is="name" class="icon" />
</template>

<script>
export default {
  props: {
    name: String,
  },
}
</script>

<style>
.icon svg {
  width: 100%;
  height: 100%;
}
</style>
