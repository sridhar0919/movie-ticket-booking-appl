import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" style={{ color: 'white' }} href="/">
          Bookshow
        </a>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}
