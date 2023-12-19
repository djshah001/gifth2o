import "./App.css";
import Home from "./components/Home/Home";
import Rootlayout from "./components/Layouts/Rootlayout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AboutContent from "./components/About-Us/AboutContent";
import Personalized from "./components/Marketing/Personalized";
import Digital from "./components/Marketing/Digital";
import EventBased from "./components/Marketing/EventBased";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Rootlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutContent />} />
        <Route path="/personalized-marketing" element={<Personalized />} />
        <Route path="/digital-marketing" element={<Digital />} />
        <Route path="/event-marketing" element={<EventBased />} />
      </Route>
    )
  );
  return (
    <div className="App">
      {/* <Example /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
