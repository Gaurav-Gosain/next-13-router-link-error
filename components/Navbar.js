import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
