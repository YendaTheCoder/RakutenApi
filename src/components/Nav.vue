<template>
    <div class="nav-wrapper">
        <div class="link" @click="mostLiked">Most Liked</div>
        <div class="link" @click="mostDisliked">Most Disliked</div>
    </div>
</template>

<script>
export default {
    name: "Navigation",
    props: ["navigation"],
    methods: { 
        mostDisliked() { 
            console.log("Biscuit")
        },
        mostLiked () {
            console.log("Cheese")
        }
}
}

</script>

<style scoped>
.nav-wrapper {
  background-color: #282c34;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: calc(3px + 2vmin);
  color: white;
}
</style>