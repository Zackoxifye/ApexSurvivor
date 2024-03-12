import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Homepage from "./MainPages/Homepage";
import AllGames from "./Games/AllGames";
import Discussions from "./MainPages/Discussions";
import Images from "./MainPages/Images";
import Videos from "./MainPages/Videos";
import Register from "./MainPages/Register";
import SignIn from "./MainPages/SignIn";
import Account from "./MainPages/Account";

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
          <Route path="/videos" element={<Videos />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
