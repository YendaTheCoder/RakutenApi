<template>
  <div id="app">
    <img id="logo" src="./assets/logo.png"/>

    <evaluation />
    <ranking />
  </div>
</template>

<script>
import Evaluation from "./components/Evaluation";
import Ranking from "./components/Ranking";

export default {
  name: "App",
  components: {
    evaluation: Evaluation,
    ranking: Ranking
  }
};
</script>

<style>
html, body {
  background: #dfd5fe;
  margin: 0;
  padding: 0;
  widows: 100vh;
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
  min-height: 5vh;
  max-height: 10vh;
}
</style>
