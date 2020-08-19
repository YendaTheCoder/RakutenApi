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

const loadingImg = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
const brokenImg = "https://media.giphy.com/media/iF3M9gPPCdulq/giphy.gif";

const loadingJoke = "Waiting for new Joke...";
const brokenJoke = "My humor is not working today.";

export default {
  name: "App",
  components: {
    meme: Meme,
    jokes: Jokes,
  },
  data: function () {
    return {
      img: loadingImg,
      joke: "Waiting for new Joke..."
    };
  },
  beforeMount() {
    this.getName();
    this.getJoke();
  },
  methods: {
    async getName() {
      const res = await axios({
          "method":"GET",
          "url":"https://mlemapi.p.rapidapi.com/randommlem",
          "headers":{
          "content-type":"application/octet-stream",
          "x-rapidapi-host":"mlemapi.p.rapidapi.com",
          "x-rapidapi-key": process.env.VUE_APP_KEY,
          "useQueryString":true
        }
      })

      if(!res.data || !res.data.url) {
        this.img = brokenImg
      } else {
        this.img = res.data.url;
      }
    },
    async getJoke() {
      const res = await axios({
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

      if(!res.data || !res.data.joke) {
        this.joke = brokenJoke;
      } else {
        this.joke = res.data.joke;
      }
    },
    onClickLike: function () {
      this.img = loadingImg;
      this.joke = loadingJoke;
      this.getName();
      this.getJoke();
      console.log("I like it!");
    },
    onClickDislike: function () {
      this.img = loadingImg;
      this.joke = loadingJoke;
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
