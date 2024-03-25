import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./global/Sidebar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Sidebar />}
        />
      </Routes>
    </div>
  );
}

export default App;
