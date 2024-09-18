<template>
  <div id="app">
    <div class="container mt-3">
      <h1>ABC Corporation Management System</h1>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Parisian chic styling */
#app {
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #e9ecef;
  min-height: 100vh;
  padding: 20px;
}
.container {
  border-radius: 8px;
}
</style>
