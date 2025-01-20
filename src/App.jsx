import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "./redux/campersOps";
import { Toaster } from "react-hot-toast";
import { selectFilter } from "./redux/selectors";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("./pages/CamperPage/CamperPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchCampers(filter));
  }, [dispatch, filter]);
  return (
    <>
      <Toaster position="bottom-right" />
      <Header />
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/campers" element={<CatalogPage />} />
            <Route path="/campers/:camperId" element={<CamperPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
