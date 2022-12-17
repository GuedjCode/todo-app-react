import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <a href="https://guedjcode.com/" style={{ textDecoration: "none" }}>
        {" "}
        <p>Copyright ⓒ {year} Benjamin Guedj - GuedjCode</p>
      </a>
    </footer>
  );
}

export default Footer;
