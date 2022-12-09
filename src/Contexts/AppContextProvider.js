import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

function AppContextProvider({ chidren }) {
  const [posts, setPosts] = useState([]);
  console.log({ chidren });

  function fetchPosts() {
    // fetch ~= axios
    // <Promise>.then().catch() <=> try-catch
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
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
      {chidren}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
