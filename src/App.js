import "./styles.css";
import { useEffect, useState, useContext } from "react";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import Button from "./Components/Button";
import NewPostModal from "./Components/NewPostModal";
import useTheme from "./Hooks/useTheme";
import { AppContext } from "./Contexts/AppContext";

function App() {
  const [theme, handleTheme] = useTheme();
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  const [currentPostIndex, setCurrentPostIndex] = useState("");
  const { posts, fetchPosts, onSubmitPost } = useContext(AppContext);

  useEffect(() => fetchPosts(), []);

  useEffect(() => console.log({ posts }), [posts]);

  function tooglePostModal() {
    setIsPostOpen((prev) => !prev);
  }

  function handleOpenPost(postIndex) {
    tooglePostModal();
    setCurrentPostIndex(postIndex);
  }

  function toogleNewPostModal() {
    setIsNewPostOpen((prev) => !prev);
  }

  return (
    <div className="main-container" data-theme={theme}>
      <Header
        theme={theme}
        handleTheme={handleTheme}
        toogleNewPostModal={toogleNewPostModal}
      />
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

      {isNewPostOpen ? (
        <NewPostModal
          toogleNewPostModal={toogleNewPostModal}
          onSubmitPost={onSubmitPost}
        />
      ) : null}
    </div>
  );
}

export default App;
