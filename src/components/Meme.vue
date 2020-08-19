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
    .buffer {
        padding: 5px;
    }
</style>