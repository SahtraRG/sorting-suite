import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SortSession from "./pages/SortSession";
import SessionSetup from "./pages/SessionSetup";
import Results from "./pages/Results";
import Moderator from "./pages/Moderator";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/session/" Component={SortSession} />
          <Route path="/setup/" Component={SessionSetup} />
          <Route path="/results/" Component={Results} />
          <Route path="/session/moderator/" Component={Moderator} />
        </Routes>
      </BrowserRouter>
    </DndProvider>
  );
}

export default App;
