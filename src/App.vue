<template>
  <div id="app">
    <img id="logo" src="./assets/logo.png" />
    <img id="clown" src="./assets/clownjoker.png" />
    <div class="nav-wrapper">
      <router-link class="link" exact-active-class="exact-active-link" to="/like">Most Liked</router-link>
      <router-link class="link" exact-active-class="exact-active-link" to="/home">Home</router-link>
      <router-link class="link" exact-active-class="exact-active-link" to="/dislike">Most Disliked</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created: function() {
    this.$router.push('/home')
  }
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
.nav-wrapper {
  background-color: #3f0591; /* Indigo */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: calc(3px + 2vmin);
  color: white;
}
.link { 
    color:#d82836; /* Amaranth Red */
}
.link:hover{
cursor: hand; 
cursor: pointer;
}
.exact-active-link { 
    color: purple; /* Amaranth Red */
}
#clown {
    /* display: flex; */
    position: absolute;
    min-height: 0vh;
  max-height: 15vh;
}
@media screen and (min-width: 0px) and (max-width: 720px) {
  #clown { display: none; }
  .mobile-hide{ display: none; }
}
/* #080708 Rich Black FOGRA 39 */
/* #C0D6DF Columbia Blue */
/* #d82836;  Amaranth Red */
</style>
