function Modal({ posts = [], postIndex = 0, children, ...rest }) {
  return (
    <section className="fullscreen-post" {...rest}>
      {children}
      <div className="post-content">
        <h1>{posts[postIndex].title}</h1>
        <p>{posts[postIndex].body}</p>
      </div>
    </section>
  );
}

export default Modal;
