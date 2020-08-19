<template>
  <div id="app">
    <img src="./assets/logo.png"/>

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
body {
  background: #dfd5fe;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
