<template>
    <div class="pop">
        <div>{{joke}}</div>
    </div>
</template>

<script>
export default {
    name: "Jokes",
    props: ["joke"]
}
</script>

<style scoped>
.pop {
/* position: absolute; */
    color: black;
    margin-top: 3vh;
    font-size: 4vh;
     /* -webkit-text-stroke: 1px black; */
}
</style>