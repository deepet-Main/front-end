import { Container, SearchButton } from "./style";
import React, { useState } from "react";

export function SearchBar() {
  const [search, setSearch] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <form action="">
        <input
          type="text"
          value={search}
          onChange={handleOnChange}
          placeholder="Search"
        />
        <button>
          <SearchButton />
        </button>
      </form>
    </Container>
  );
}
