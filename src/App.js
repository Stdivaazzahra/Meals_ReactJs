import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import Navbar from "./pages/Navbar/Navbar";
import SearchPage from "./pages/search/SearchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories/:cate" element={<CategoriesPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/search/:name" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
