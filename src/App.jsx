import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import OriginePage from "./pages/OriginePage";
import HistoirePage from "./pages/HistoirePage";
import LexiquePage from "./pages/LexiquePage";
import MediasPage from "./pages/MediasPage";
import MissingPage from "./pages/MissingPage";
import { SearchProvider } from "./context/SearchContext";
import AntiquitePage from "./pages/AntiquitePage";
import ChinePage from "./pages/ChinePage";
import VocabulairePage from "./pages/VocabulairePage";
import AlphabetPage from "./pages/AlphabetPage";
import FilmsPage from "./pages/FilmsPage";

function App() {
  return (
    <SearchProvider>
      <Router basename={import.meta.env.VITE_APP_BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="origine" element={<OriginePage />} />
            <Route path="histoire">
              <Route index element={<HistoirePage />} />
              <Route path="antiquité" element={<AntiquitePage />} />
              <Route path="chine" element={<ChinePage />} />
            </Route>
            <Route path="lexique">
              <Route index element={<LexiquePage />} />
              <Route path="dactylologie" element={<AlphabetPage />} />
              <Route path="vocabulaire" element={<VocabulairePage />} />
            </Route>
            <Route path="medias">
              <Route index element={<MediasPage />} />
              <Route path="films" element={<FilmsPage />} />
            </Route>
            <Route path="*" element={<MissingPage />} />
          </Route>
        </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;
