<template>
  <div id="app">
    <div v-if="$store.state.error" class="w-64 mx-20 mt-10">
      <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
      <p class="font-bold">Oops!</p>
      <p>Something went wrong!</p>
    </div>
  </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
