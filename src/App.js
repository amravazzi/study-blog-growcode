import "./styles.css";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => fetchPosts(), []);

  useEffect(() => console.log(posts), [posts]);

  function fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        data.length = 10;
        setPosts(data);
      });
  }

  return (
    <div className="main-container">
      <header>
        <h1>Lorem Ipsum Blog</h1>
        <button>Novo Post</button>
        <button>Dark Mode</button>
      </header>
      <main>
        {posts.map((post) => (
          <section className="post-card" id={post.id}>
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
    </div>
  );
}

export default App;
