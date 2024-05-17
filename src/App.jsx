import { Route, Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Vidio from "./pages/Vidio";
import Channel from "./pages/Channel";
import MainLayout from "./layout/MainLayout";


function App() {
  return (
    <>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:id" element={<Vidio />} />
        <Route path="/channel/:id" element={<Channel />} />
      </Routes>
    </MainLayout>
    </>
  );
}

export default App;
