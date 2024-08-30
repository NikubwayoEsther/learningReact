import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomeLayouts from "./layouts/HomeLayouts";
import DashLayouts from "./layouts/DashLayouts";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/not-found";
import About from "./pages/About";
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>

        {/* home Routes */}
        <Route path="/" element={<HomeLayouts />} >
          <Route element={<Home />} index />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

        </Route>

        {/* dashboard Routes */}
        <Route path="/dashboard" element={<DashLayouts />} >
          <Route element={<Dashboard />} index />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
