import "./styles.css";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState("day");
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [currentPostIndex, setCurrentPostIndex] = useState("");

  useEffect(() => fetchPosts(), []);

  useEffect(() => console.log(posts), [posts]);

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

  function handleTheme() {
    setTheme((theme) => (theme === "night" ? "day" : "night"));
  }

  function tooglePostModal() {
    setIsPostOpen((prev) => !prev);
  }

  function handleOpenPost(postIndex) {
    tooglePostModal();
    setCurrentPostIndex(postIndex);
  }

  return (
    <div className="main-container" data-theme={theme}>
      <header>
        <h1>Lorem Ipsum Blog</h1>
        <button className="btn primary">Novo Post</button>
        <button className="btn primary" onClick={() => handleTheme()}>
          {theme === "night" ? "Day" : "Night"} Mode
        </button>
      </header>
      <main>
        {posts.map((post, i) => (
          <section
            className="post-card"
            id={post.id}
            onClick={() => handleOpenPost(i)}
          >
            <div className="post-preview-content">
              <div className="post-author">
                <img
                  src="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"
                  alt="Avatar do autor"
                  className="author-avatar"
                />
                <p>Fulana</p>
              </div>
              <div className="post-body">
                <p className="post-title">{post.title}</p>
                <p className="post-preview">{post.body}</p>
              </div>
            </div>
            <div className="post-image">
              <img
                src={`https://picsum.photos/id/${10 * post.id}/100`}
                alt="imagem do post"
              />
            </div>
          </section>
        ))}
      </main>

      {isPostOpen ? (
        <section className="fullscreen-post">
          <button
            onClick={() => tooglePostModal()}
            className="btn secondary post-close"
          >
            &times;
          </button>
          <div className="post-content">
            <h1>{posts[currentPostIndex].title}</h1>
            <p>{posts[currentPostIndex].body}</p>
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default App;
