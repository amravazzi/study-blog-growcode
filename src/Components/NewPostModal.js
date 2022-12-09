import Button from "./Button";
import { useState, useEffect } from "react";

function NewPostModal({
  toogleNewPostModal = () => {},
  onSubmitPost = () => {},
}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPublishingPost, setIsPublishingPost] = useState(false);

  function handleSubmitPost() {
    setIsPublishingPost(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setIsPublishingPost(false);
        onSubmitPost(response);
        toogleNewPostModal();
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="fullscreen-post">
      <button
        onClick={() => toogleNewPostModal()}
        className="btn secondary post-close"
      >
        &times;
      </button>
      <div className="post-form">
        <fieldset>
          <label htmlFor="post-title">Título do Post</label>
          <input
            type="text"
            name="post-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="post-body">Conteúdo do Post</label>
          <textarea
            name="post-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </fieldset>
        <Button
          type="submit"
          className="primary submit-btn"
          alt="Publicar post"
          handleClick={handleSubmitPost}
          disabled={isPublishingPost || !title || !body}
        >
          {isPublishingPost ? "Publicando..." : "Publicar Post"}
        </Button>
      </div>
    </section>
  );
}

export default NewPostModal;
