<template>
  <div class="user">
    <!-- <h1>This is {{ $route.params.username }}</h1> -->
    <!-- going to /Users/Bob will make this page say "This is Bob" -->
    <h1>This is {{ username }}</h1>
    <router-link :to="{ name: 'user', params: { username: 'Bob' } }"
      >Bob</router-link
    >
  </div>
</template>

<script>
export default {
  props: ['username']
}
</script>
