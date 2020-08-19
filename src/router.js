import Vue from "vue";
import VueRouter from 'vue-router'
import Evaluation from "./components/Evaluation";
import Ranking from "./components/Ranking";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Evaluation },
    { path: '/home', component: Evaluation },
    { path: '/like', component: Ranking, props: { likeOrDislike: "like" } },
    { path: '/dislike', component: Ranking, props: { likeOrDislike: "dislike" } }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router;