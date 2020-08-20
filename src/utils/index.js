import axios from "axios";

// retrieve jokes from database
export async function getDbJokes() {
  const { data } = await axios.get("/api");
  console.log("data", data);
  return data;
}

export async function patchDbJokes(joke, joke_ID, likeOrDislike) {
  axios({
    method: 'patch',
    url: '/api',
    data: {
      joke: joke,
      joke_ID: joke_ID,
      likeOrDislike: likeOrDislike
    }
  });
}
