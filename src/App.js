import Login from "./routes/login";
import Intro from "./routes/intro";
import Signup from "./routes/signup";
import Main from "./routes/main";
import Write from "./routes/write";
import Category1 from "./routes/category1";
import Category2 from "./routes/category2";
import Category3 from "./routes/category3";
import Check from "./routes/check";
import { Routes } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Postpageview from "./routes/postpageview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/category1" element={<Category1 />} />
        <Route path="/category2" element={<Category2 />} />
        <Route path="/category3" element={<Category3 />} />
        <Route path="/check" element={<Check />} />
        <Route path="/postpageview" element={<Postpageview />} />
      </Routes>
    </Router>
  );
}

export default App;
