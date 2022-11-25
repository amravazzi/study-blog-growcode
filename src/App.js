import "./styles.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Modal from "./Components/Modal";

function App() {
  const [theme, setTheme] = useState("day");
  const [posts, setPosts] = useState([]);
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

  function tooglePostModal() {
    setIsPostOpen((prev) => !prev);
  }

  function handleOpenPost(postIndex) {
    tooglePostModal();
    setCurrentPostIndex(postIndex);
  }

  function handleTheme() {
    setTheme((theme) => (theme === "night" ? "day" : "night"));
  }

  return (
    <div className="main-container" data-theme={theme}>
      <Header handleTheme={handleTheme} />
      <main>
        {posts.map((post, i) => (
          <section
            className="post-card"
            id={post.id}
            onClick={() => handleOpenPost(i)}
            key={post.id}
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
        <Modal
          posts={posts}
          postIndex={currentPostIndex}
          alt={"qualquer coisa"}
        >
          <button
            onClick={() => tooglePostModal()}
            className="btn secondary post-close"
          >
            &times;
          </button>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
