import axios from "axios";

// retrieve jokes from database
export async function getDbJokes() {
  const { data } = await axios.get("/api");
  console.log("data", data);
  return data;
}

// // store new joke in database
// export function storeJoke () {
//     const joke = {
//       joke_ID: this.joke.key,
//       joke: this.joke,
//       like: "",
//       dislike: "",
//     }
//     fetch(/*"/api/endpoint"*/, {
//       method: "post",
//       body: JSON.stringify(joke),
//       headers: { 'Content-type': 'application/json' }
//     });
// }

// // update existing joke in database
// export function updateJoke() {
//     const joke = {
//       joke_ID: this.joke.key,
//       joke: this.joke,
//       like: "",
//       dislike: "",
//     }
//     fetch(/*"/api/endpoint"*/, {
//       method: "patch",
//       body: JSON.stringify(joke),
//       headers: { 'Content-type': 'application/json' }
//     });
// }