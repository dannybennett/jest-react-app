import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import Random from "./pages/Random.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import Container from "react-bootstrap/Container";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Container fluid="md">
        <Menu />
        <App />
      </Container>
    ),
  },
  {
    path: "/images",
    element: (
      <Container fluid="md">
        <Menu />
        <Random />
      </Container>
    ),
  },
]);

// https://reactrouter.com/en/main/routers/router-provider
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
