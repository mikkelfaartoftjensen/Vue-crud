<template>
  <div class="home">
    <h2>All visited Countries</h2>
    <PostList/>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '../components/PostList.vue'

export default {
  name: 'Home',
  components: {
    PostList
  }
}
</script>

<style scoped>

</style>
