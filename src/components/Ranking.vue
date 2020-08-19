<template>
  <div class="ranking-div">
    Ranking Block
    <div v-for="(item, index) in jokes" :key="index">
      <div>
        <div class="ranks-div">ranking: {{ index + 1 }}</div>
        <div class>{{ item.joke }}</div>
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

<style scoped></style>
