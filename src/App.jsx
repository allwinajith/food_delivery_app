import { useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/index.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app-wrapper">
      <Header setSearchTerm={setSearchTerm} />
      <Body searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;
