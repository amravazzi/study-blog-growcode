import { useState } from "react";

function Header({ theme = "day", handleTheme = () => {} }) {
  return (
    <header>
      <h1>Lorem Ipsum Blog</h1>
      <button className="btn primary">Novo Post</button>
      <button className="btn primary" onClick={() => handleTheme()}>
        {theme === "night" ? "Day" : "Night"} Mode
      </button>
    </header>
  );
}

export default Header;
