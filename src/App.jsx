import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//Pages
import Navbar from "./pages/Layout/Navbar";
import Footer from "./pages/Layout/Footer";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/" element={<Footer />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/edit" element={<Edit />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
