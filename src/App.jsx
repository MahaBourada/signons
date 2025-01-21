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
