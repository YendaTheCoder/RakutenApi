import axios from "axios";

// retrieve jokes from database
export async function getDbJokes() {
  const { data } = await axios.get("/api");
  console.log("data", data);
  return data;
}
