<template>
  <div id="app">
    <img id="logo" src="./assets/logo.png" />
    <navigation />
    <evaluation v-if="IsHere"/>
    <ranking v-else/>
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
      jokeId: "",
      IsHere: true
    };
  },
  beforeMount() {
    this.getName();
    this.getJoke();
  },
  methods: {
    async getName() {
      const res = await axios({
        method: "GET",
        url: "https://mlemapi.p.rapidapi.com/randommlem",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "mlemapi.p.rapidapi.com",
          "x-rapidapi-key": process.env.VUE_APP_KEY,
          useQueryString: true,
        },
      });

      if (!res.data || !res.data.url) {
        this.img = brokenImg;
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

      if (!res.data || !res.data.joke) {
        this.joke = brokenJoke;
      } else {
        this.joke = res.data.joke;
        this.jokeId = res.data.id;
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
        const storeJoke = () => {
          const joke = {
          joke_id: this.jokeId,
          joke: this.joke,
          like: 1,
          dislike: 0,
          }
          fetch('/api/addJoke/:joke', {
          method: 'post',
          body: JSON.stringify(joke),
          headers: { 'Content-type': 'application/json' }
          })
        }
        storeJoke();
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
        const storeJoke = () => {
          const joke = {
          joke_id: this.jokeId,
          joke: this.joke,
          like: 0,
          dislike: 1,
          }
          fetch('/api/addJoke/:joke', {
          method: 'post',
          body: JSON.stringify(joke),
          headers: { 'Content-type': 'application/json' }
          })
        }
        storeJoke();
      } else {
        console.log("patch", check);
      }
    },
  },
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
button {
  background-color: #3f0591; /* Indigo */
  border: none;
  padding: 10px 20px;
  color: white;
  margin: 3px;
  box-shadow: -3px 3px #d82836, -2px 2px #d82836, -1px 1px #d82836;
  border: 1px solid #d82836;
  outline: none;
}
button:hover {
  cursor: hand;
  cursor: pointer;
}
button:active {
  -webkit-box-shadow: 0px 1px 0px #d82836;
  -moz-box-shadow: 0px 1px 0px #d82836;
  box-shadow: 0px 1px 0px #d82836;
  position: relative;
  top: 6px;
  outline: none;
}
/* #080708 Rich Black FOGRA 39 */
/* #C0D6DF Columbia Blue */
/* #d82836;  Amaranth Red */
</style>
