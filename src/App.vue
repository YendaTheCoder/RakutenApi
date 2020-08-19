<template>
  <div id="app">
    <img id="logo" src="./assets/logo.png" />
    <div>
      <router-link to="/like">Most Liked</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/dislike">Most Disliked</router-link>
    </div>
    <router-view />
    <navigation />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body {
  background: #dbe9ee; /*Alice Blue*/
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#logo {
  min-height: 0vh;
  max-height: 15vh;
}
/* #080708 Rich Black FOGRA 39 */
/* #C0D6DF Columbia Blue */
/* #d82836;  Amaranth Red */
</style>
