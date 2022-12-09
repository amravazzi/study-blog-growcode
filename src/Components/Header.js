import { useState } from "react";
import Button from "./Button";

function Header({
  theme = "day",
  handleTheme = () => {},
  toogleNewPostModal = () => {},
}) {
  console.log({ theme });

  return (
    <header>
      <h1>Lorem Ipsum Blog</h1>
      <Button
        className="primary"
        alt="Novo post"
        handleClick={toogleNewPostModal}
      >
        Novo Post
      </Button>
      <Button className="primary" handleClick={handleTheme}>
        {theme === "night" ? "Day" : "Night"} Mode
      </Button>
    </header>
  );
}

export default Header;
