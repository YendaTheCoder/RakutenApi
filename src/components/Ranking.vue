<template>
    <div>Ranking Block
        <div v-for="item in ranking" v-bind:key="item">
            <div>
                <div>ranking: {{item.rank}}</div> 
                <div>{{item.joke}}</div> 
                <v-fa :icon="['fas', 'heart']" size="xs"/>
                {{item.like}}
                <v-fa :icon="['fas', 'heart-broken']" size="xs"/>
                {{item.dislike}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            ranking: [
                {
                    rank: 1,
                    joke: "joke here1",
                    like: 100,
                    dislike: 1000
                },
                { 
                    rank: 2,
                    joke: "joke here2",
                    like: 1000,
                    dislike: 100
                },
            ]
        }
    },
    beforeMount() {
        console.log("ranking api will be called here");
    },
    methods: {

    }
}
</script>

<style scoped>
img {
    width: 180px;
}
</style>