<template>
  <div id="app">
    <img id="logo" src="./assets/logo.png"/>
    <navigation />
    <evaluation />
    <ranking />
  </div>
</template>

<script>
import Evaluation from "./components/Evaluation";
import Ranking from "./components/Ranking";
import Navigation from "./components/Nav";
import axios from "axios";
import { getDbJokes } from "./utils/index";
require("dotenv").config();

const loadingImg = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
const brokenImg = "https://media.giphy.com/media/iF3M9gPPCdulq/giphy.gif";

const loadingJoke = "Waiting for new Joke...";
const brokenJoke = "My humor is not working today.";

export default {
  name: "App",
  components: {
    evaluation: Evaluation,
    ranking: Ranking,
    navigation: Navigation,
  },
  data: function () {
    return {
      img: loadingImg,
      joke: "Waiting for new Joke...",
      jokeId: ''
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
        this.jokeId = res.data.id
      }
    },
    onClickLike: async function () {
      this.img = loadingImg;
      this.joke = loadingJoke;
      this.getName();
      this.getJoke();
      console.log("I like it!");
      const jokes = await getDbJokes();
      let check = jokes.filter(joke => joke.joke_ID === this.jokeId);
      if (check.length === 0) {
        console.log("post", check);
      } else {
        console.log("patch", check);
      }
    },
    onClickDislike: async function () {
      this.img = loadingImg;
      this.joke = loadingJoke;
      this.getName();
      this.getJoke();

      console.log("I do not like it");
      const jokes = await getDbJokes();
      let check = jokes.filter(joke => joke.joke_ID === this.jokeId);
      if (check.length === 0) {
        console.log("post", check);
      } else {
        console.log("patch", check);
      }
    },
  },
};
</script>

<style>
html, body {
  background: #DBE9EE; /*Alice Blue*/
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
