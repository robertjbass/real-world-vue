<template>
  <h1 v-if="condition" @click="handler(arg, event)">Event Card</h1>
</template>

<script>
import { libName } from 'libName'
export default {
  props: {
    propName: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      key: value
    }
  }
}
</script>

<style></style>
