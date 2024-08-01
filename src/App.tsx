import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateProposal from "./CreateProposal";
import HomeDAO from "./HomeDAO";

function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<HomeDAO />}></Route>
          <Route path="/create-proposal" element={<CreateProposal />}></Route>
        </Routes>
      </>
    </>
  );
}

export default App;
