<template>
  <div id="app" ref="app">
    <img id="logo" src="./assets/logo.png" />
    <navigation />
    <div class="clown">
    <img id="clown" @click="clownFunction" src="./assets/clownjoker.png"  ref="clown" v-bind:class="{ left: isLeft, right: isRight }" />
    <div class="speech-bubble">{{clown}}</div>
    </div>
    <evaluation v-if="IsHere" />
    <ranking v-else />

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
  data: function() {
    return {
      img: loadingImg,
      joke: "Waiting for new Joke...",
      jokeId: "",
      IsHere: true,
      clown: '',
      isRight: false,
      isLeft: false
    };
  },
  beforeMount() {
    this.getName();
    this.getJoke();
    this.getClown();
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
    async getClown () {
      const clown = await  axios({
        method: "GET",
        url: "https://api.adviceslip.com/advice"
        // url: "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
      });
      console.log(clown)
      this.clown = clown.data.slip.advice
      // this.clown = clown.data.message
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
    onClickLike: async function() {
      this.img = loadingImg;
      this.joke = loadingJoke;
      this.getName();
      this.getJoke();
      console.log("I like it!");
      const jokes = await getDbJokes();
      let check = jokes.filter((joke) => joke.joke_ID === this.jokeId);
      if (check.length === 0) {
        console.log("post", check);
      } else {
        console.log("patch", check);
      }
    },
    onClickDislike: async function() {
      this.img = loadingImg;
      this.joke = loadingJoke;
      this.getName();
      this.getJoke();

      console.log("I do not like it");
      const jokes = await getDbJokes();
      let check = jokes.filter((joke) => joke.joke_ID === this.jokeId);
      if (check.length === 0) {
        console.log("post", check);
      } else {
        console.log("patch", check);
      }
    },
    clownFunction () {
      console.log(this.$refs.clown.getBoundingClientRect().x)
        const theDiv = this.$refs.clown,
        theContainer = this.$refs.app,
        maxLeft = theContainer.offsetWidth - theDiv.offsetWidth,
        maxTop = theContainer.offsetHeight - theDiv.offsetHeight,
        leftPos = Math.floor(Math.random() * maxLeft),
        topPos = Math.floor(Math.random() * maxTop);

    if (theDiv.getBoundingClientRect().x.left < leftPos) {
        this.$set(this.$data, 'isLeft', false);
        this.$set(this.$data, 'isRight', true);
        // theDiv.removeClass("left").addClass("right");
    } else {
        this.$set(this.$data, 'isLeft', true);
        this.$set(this.$data, 'isRight', false);
        // theDiv.removeClass("right").addClass("left");
    }

    theDiv.animate({
        "left": leftPos,
        "top": topPos
    }, 1200, this.clownFunction);
}
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
  padding: 8px 18px;
  color: white;
  margin: 3px;
  box-shadow: -3px 3px #d82836, -2px 2px #d82836, -1px 1px #d82836;
  border: 1px solid #d82836;
  outline: none;
  font-family: URW Chancery L, cursive;
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
#clown {
  display: flex;
  position: absolute;
  /* min-height: 0vh;
  max-height: 15vh; */
}
.clown {
  display: flex;
  position: absolute;
  /* min-height: 0vh;
  max-height: 15vh; */
  margin-top: 1vh; 
}
@media screen and (min-width: 0px) and (max-width: 720px) {
  #clown {
    display: none;
  }
  .speech-bubble {
    display: none;
  }
  .mobile-hide {
    display: none;
  }
}
.speech-bubble {
  position: relative;
  background: #00aabb;
  border-radius: 0.4em;
  /* display: flex; */
  min-width: 10vh;
  margin-left: 22vh;
  max-width: 60vh;
}
.speech-bubble:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 6vh;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-top-color: #00aabb;
  border-bottom: 0;
  border-left: 0;
  margin-left: -20px;
  margin-bottom: -20px;
}
/* #080708 Rich Black FOGRA 39 */
/* #C0D6DF Columbia Blue */
/* #d82836;  Amaranth Red */
</style>
