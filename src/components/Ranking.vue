<template>
  <div class="ranking-div">
    <div v-for="(item, index) in jokes" :key="index">
      <div class="wrapper-ranks">
        <div class="ranks-div">Ranking: {{ index + 1 }}</div>
        <div :id="index" class="joke-on-rank">{{ item.joke }}</div>
        <div v-if="likeOrDislike === 'like'">
          <v-fa :icon="['fas', 'heart']" size="xs" />
          {{ item.like }}
        </div>
        <div v-if="likeOrDislike === 'dislike'">
          <v-fa :icon="['fas', 'heart-broken']" size="xs" />
          {{ item.dislike }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["likeOrDislike"],
  data() {
    return {
      jokes: [],
    };
  },
  created() {
    this.retrieve();
  },
  watch: {
    "$route.path": function() {
      this.retrieve();
    },
  },
  // beforeMount() {
  //   this.retrieve();
  // },
  methods: {
    async retrieve() {
      if (this.likeOrDislike === "like") {
        await axios
          .get("/api/like")
          .then((response) => {
            this.jokes = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (this.likeOrDislike === "dislike") {
        await axios
          .get("/api/dislike")
          .then((response) => {
            this.jokes = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
  // mounted() {
  //   this.retrieve();
  // },
};
</script>

<style scoped>
.ranking-div {
max-width: 60vh;
display: inline-block;
margin-top: 1vh;
}
.ranks-div {
 font: bold;
  color:#d82836; /* Amaranth Red */
    font-size: 4vh;
     font-weight: bold;
    -webkit-text-stroke: 0.5px white;
 font-family: URW Chancery L, cursive;
}
.joke-on-rank {
  /* padding: 1vh; */
  font-family: URW Chancery L, cursive;
}
.wrapper-ranks{
  padding: 1vh;
}
</style>