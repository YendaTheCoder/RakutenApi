<template>
  <div id="app">
    <img src="./assets/logo.png"/>
    <h1>Joker</h1>
    <meme id="meme" :img="img" />
    <jokes id="joke" :joke="joke" />

    <button @click="onClickLike">LIKE</button>
    <button @click="onClickDislike">DISLIKE</button>
  </div>
</template>

<script>
import Meme from "./components/Meme";
import Jokes from "./components/Jokes";
import axios from "axios";
require("dotenv").config();

export default {
  name: "App",
  components: {
    meme: Meme,
    jokes: Jokes,
  },
  data: function () {
    return {
      img: "",
      joke: "Joke will appear here",
      data: {},
    };
  },
  created: function () {
    console.log("App created! get image here");
    console.log("App created! get joke here");
  },
  beforeMount() {
    this.getName();
    this.getJoke();
  },
  methods: {
    async getName() {
      const nut = await axios({
    "method":"GET",
    "url":"https://mlemapi.p.rapidapi.com/randommlem",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"mlemapi.p.rapidapi.com",
    "x-rapidapi-key": process.env.VUE_APP_KEY,
    "useQueryString":true
    }
    })
      console.log(nut);
      this.data = nut.data.url;
      this.img = nut.data.url;
    },
    async getJoke() {
      const joke = await axios({
        method: "GET",
        url: "https://jokeapi-v2.p.rapidapi.com/joke/Any",
        headers: {
          "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
          "x-rapidapi-key": process.env.VUE_APP_KEY,
          useQueryString: true,
        },
        params: {
          blacklistFlags: "nsfw",
          type: "single",
        },
      });
      console.log(joke);
      this.joke = joke.data.joke;
    },
    onClickLike: function () {
      this.getName();
      this.getJoke();

      console.log("I like it!");
    },
    onClickDislike: function () {
      this.getName();
      this.getJoke();

      console.log("I do not like it");
    },
  },
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
img {
  min-height: 25vh;
  max-height: 60vh;
}
button {
  background-color: #3c46fb;
  border: none;
  padding: 10px 20px;
  color: white; 
  margin: 3px;
}
</style>
