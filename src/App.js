import { useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./views/home";
import ResultsPage from "./views/results";
import EmbedPage from "./views/iframe";
import "./App.css";

function App() {
  const [post, setPost] = useState(null);

  return (
    <main>
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/results">Results</Link>
          <Link to="/embed">Embed</Link>
        </nav>
        <div>
          <Routes>
            <Route
              path="/"
              exact
              element={<HomePage post={post} setPost={setPost} />}
            />
            <Route path="/results" element={<ResultsPage post={post} />} />
            <Route path="/embed" element={<EmbedPage />} />
          </Routes>
        </div>
      </HashRouter>
    </main>
  );
}

export default App;
