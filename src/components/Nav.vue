<template>
    <div class="nav-wrapper">
        <div class="link" @click="mostLiked">Most Liked</div>
        <div class="link" @click="Home">Home</div>
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
        },
        Home () {
            console.log('Wine')
            }
}
}

</script>

<style scoped>
.nav-wrapper {
  background-color: #3f0591; /* Indigo */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: calc(3px + 2vmin);
  color: white;
}
.link { 
    color:#d82836; /* Amaranth Red */
    font-size: 4vh;
     font-weight: bold;
    -webkit-text-stroke: 0.5px white;
    font-family: URW Chancery L, cursive;
    /* text-shadow: white 1px 0 10px; */
}
.link:hover{
cursor: hand; 
cursor: pointer;
}
</style>