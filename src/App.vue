<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #24292e;
  background-color: #f6f8fa;
  margin: 0;
  padding: 0;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style> 