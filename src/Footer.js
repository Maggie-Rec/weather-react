import React from "react";
import "./Footer.css";

export default function Footer() {
  let sourceUrl = "https://github.com/Maggie-Rec/weatherApp";

  return (
    <footer>
      <small>
        This project is{" "}
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
          Open-Sourced on GitHub
        </a>{" "}
        and coded by MaggieR
      </small>
    </footer>
  );
}
