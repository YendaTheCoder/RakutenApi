import axios from "axios";

// retrieve jokes from database
export async function getJokes() {
    const { data } = await axios.get(/*"endpoint"*/);
    console.log("data", data);
    return data;
}