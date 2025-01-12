import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import OriginePage from "./pages/OriginePage";
import HistoirePage from "./pages/HistoirePage";
import LexiquePage from "./pages/LexiquePage";
import MediasPage from "./pages/MediasPage";
import MissingPage from "./pages/MissingPage";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="origine" element={<OriginePage />} />
            <Route path="histoire" element={<HistoirePage />} />
            <Route path="lexique" element={<LexiquePage />} />
            <Route path="medias" element={<MediasPage />} />
            <Route path="*" element={<MissingPage />} />
          </Route>
        </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;
