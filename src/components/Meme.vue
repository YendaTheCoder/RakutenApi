<template>
    <div>
        <div class="buffer"></div>
        <img :src="img" alt="image not found">
    </div>
</template>

<script>
export default {
    name: "Meme",
    props: ["img"]
}
</script>

<style scoped>
img {
    max-width: -webkit-fill-available;
}
    .buffer {
        padding: 5px;
    }
    img {
     min-height: 25vh;
     max-height: 50vh;
     max-width: -webkit-fill-available;
    }
</style>