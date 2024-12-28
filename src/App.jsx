import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import Assets from "./pages/Assets";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/assets" element={<Assets />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
