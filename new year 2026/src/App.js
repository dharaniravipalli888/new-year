import { useState } from "react";
import Header from "./components/header";
import NameInput from "./components/nameinput";
import Wish from "./components/wish";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [showWish, setShowWish] = useState(false);

  return (
    <div className="container">
      <div className="card">
        <Header />
        <NameInput
          name={name}
          setName={setName}
          setShowWish={setShowWish}
        />
        {showWish && <Wish name={name} />}
      </div>
    </div>
  );
}

export default App;
