import React from "react";
import "./Footer.css";

export default function Footer() {
  let sourceUrl = "https://github.com/Maggie-Rec/weatherApp";

  return (
    <footer>
      <a href={sourceUrl} target="_blank" rel="noreferrer">
        Open Source
      </a>
      Coded by MaggieR
    </footer>
  );
}
