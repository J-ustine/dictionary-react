import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  function handlekeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <form>
      <input
        type="search"
        placeholder="Enter a word"
        onChange={handlekeyword}
      />
      <input type="submit" value="Search" />
      {keyword}
    </form>
  );
}
