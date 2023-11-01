import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/notfound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App;
