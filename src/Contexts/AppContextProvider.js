import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import App from "../App";

function AppContextProvider() {
  const [posts, setPosts] = useState([]);

  function fetchPosts() {
    // fetch ~= axios
    // <Promise>.then().catch() <=> try-catch
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.length = 10;
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }

  function onSubmitPost(post) {
    setPosts((prev) => [post, ...prev]);
  }

  return (
    <AppContext.Provider value={{ posts, fetchPosts, onSubmitPost }}>
      <App />
    </AppContext.Provider>
  );
}

export default AppContextProvider;
