import { useState } from "react";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {/* Navbar */}
      <nav style={{ background: "#222", padding: "10px" }}>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("contact")}>Contact</button>
      </nav>

      {/* Page Content */}
      <div style={{ padding: "20px" }}>
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
      </div>
    </>
  );
}

export default App;
