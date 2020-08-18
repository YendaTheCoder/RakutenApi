<template>
  <div id="app">
    <h1>Welocome to the Most Funny Meme Application</h1>
    <div>{{ data.data }}</div>
    <meme :img="img" />
    <jokes :joke="joke" />
    <button @click="onClickLike">LIKE</button>
    <button @click="onClickDislike">DISLIKE</button>
  </div>
</template>

<script>
import Meme from "./components/Meme";
import Jokes from "./components/Jokes";
import axios from "axios";

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
      // joke: {},
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
        method: "GET",
        url:
          "https://dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com/",
        headers: {
          "x-rapidapi-host":
            "dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.KEY,
          useQueryString: true,
        },
        params: {
          count: "1",
          gender: "b",
          maxage: "90",
          minage: "20",
          cc: "all",
          email: "gmail.com%2Cyahoo.com",
          pwlen: "12",
          ip: "a",
          phone: "l%2Ct%2Co",
          uuid: "false",
          lic: "false",
          color: "false",
          seed: "helloworld",
          images: "false",
          format: "json",
        },
      });
      console.log(nut);
      this.data = nut;
      this.img = nut.data[0];
    },
    async getJoke() {
      const joke = await axios({
        method: "GET",
        url: "https://jokeapi-v2.p.rapidapi.com/joke/Any",
        headers: {
          "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
          "x-rapidapi-key": process.env.KEY,
          useQueryString: true,
        },
        params: {
          blacklistFlags: "nsfw",
          type: "single",
        },
      });
      console.log(joke);
      this.joke = joke;
    },
    onClickLike: function () {
      if (
        this.img == "https://media.giphy.com/media/2tMYOWRjFHveuOB6jg/giphy.gif"
      ) {
        this.img = "https://media.giphy.com/media/Tdp2QlrGJVsz1TRY1h/giphy.gif";
      } else {
        this.img = "https://media.giphy.com/media/2tMYOWRjFHveuOB6jg/giphy.gif";
      }

      this.joke = this.joke + "!!";

      console.log("I like it!");
    },
    onClickDislike: function () {
      if (
        this.img == "https://media.giphy.com/media/2tMYOWRjFHveuOB6jg/giphy.gif"
      ) {
        this.img = "https://media.giphy.com/media/Tdp2QlrGJVsz1TRY1h/giphy.gif";
      } else {
        this.img = "https://media.giphy.com/media/2tMYOWRjFHveuOB6jg/giphy.gif";
      }

      this.joke = this.joke + "!!";

      console.log("I do not like it");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
