import { Container, SearchButton } from "./style";
import React, { useState } from "react";

export function SearchBar() {
  const [search, setSearch] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <input
        type="text"
        value={search}
        onChange={handleOnChange}
        placeholder="Search"
      />
      <button className="bg-slate-300">
        <SearchButton />
      </button>
    </Container>
  );
}
