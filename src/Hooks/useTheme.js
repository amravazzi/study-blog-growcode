import { useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState("day");

  function handleTheme() {
    setTheme((theme) => (theme === "night" ? "day" : "night"));
  }

  return [theme, handleTheme];
}

export default useTheme;
