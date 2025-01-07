import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import OriginePage from "./pages/OriginePage";
import HistoirePage from "./pages/HistoirePage";
import LexiquePage from "./pages/LexiquePage";
import MediasPage from "./pages/MediasPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="origine" element={<OriginePage />} />
          <Route path="histoire" element={<HistoirePage />} />
          <Route path="lexique" element={<LexiquePage />} />
          <Route path="medias" element={<MediasPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
