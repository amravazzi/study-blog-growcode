import "./styles.css";

function App() {
  return (
    <div>
      <header>
        <h1>Lorem Ipsum Blog</h1>
        <button>Novo Post</button>
        <button>Dark Mode</button>
      </header>
      <main>
        <section className="post-card">
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
              <p className="post-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="post-preview">
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Etiam faucibus vel neque in hendrerit. Praesent congue augue in
                quam rutrum, at bibendum mauris posuere. Integer quis eros
                vestibulum, commodo sapien eget, posuere purus. Morbi erat nisl,
                scelerisque nec tortor id, interdum iaculis orci. Suspendisse
                sit amet lacus sit amet orci lobortis cursus. Integer egestas
                pulvinar mauris sed luctus. Nulla in eros odio. Donec et ante
                lacus. Curabitur et sollicitudin odio. Nam at nunc in est
                condimentum malesuada dictum porta velit. Praesent a luctus
                lectus. Phasellus sed mi a nibh fermentum sagittis. Curabitur
                sit amet auctor mi. Suspendisse potenti. Mauris maximus
                consequat mi a mollis.
              </p>
            </div>
          </div>
          <div className="post-image">
            <img src="https://picsum.photos/100" alt="imagem do post" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
