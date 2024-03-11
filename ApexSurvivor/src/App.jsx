import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Homepage from "./MainPages/Homepage";
import AllGames from "./MainPages/AllGames";
import Discussions from "./MainPages/Discussions";
import Images from "./MainPages/Images";
import Register from "./MainPages/Register";
import SignIn from "./MainPages/SignIn";
import Videos from "./MainPages/Videos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/all-games" element={<AllGames />} />
          <Route path="/discussions" element={<Discussions />} />
          <Route path="/images" element={<Images />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
