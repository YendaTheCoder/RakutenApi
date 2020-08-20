<template>
  <div id="app" ref="app">
    <!-- <img id="logo" src="./assets/logo.png" /> -->
    <div class="clown">
    <img id="clown" @click="clownFunction" src="./assets/clownjoker.png"  ref="clown" v-bind:class="{ left: isLeft, right: isRight }" />
    <div class="speech-bubble">{{clown}}</div>
    </div>
    <div class="nav-wrapper">
      <router-link class="link" exact-active-class="exact-active-link" to="/like">Most Liked</router-link>
      <router-link class="link" exact-active-class="exact-active-link" to="/home">Home</router-link>
      <router-link class="link" exact-active-class="exact-active-link" to="/dislike">Most Disliked</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  data: function() {
    return {
      clown: '',
      isRight: false,
      isLeft: false
    };
  },
  beforeMount() {
    this.getClown();
  },
  methods: {
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
  border: none;
  padding: 8px 18px;
  color: white;
  margin: 3px;
  box-shadow: -3px 3px #d82836, -2px 2px #d82836, -1px 1px #d82836;
  border: 1px solid #d82836;
  outline: none;
  font-family: URW Chancery L, cursive;
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
