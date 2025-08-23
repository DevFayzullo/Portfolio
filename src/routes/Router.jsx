import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Loading from "../components/Loading.jsx";

const Home = lazy(() => import("../pages/Home.jsx"));
const About = lazy(() => import("../pages/About.jsx"));
const Projects = lazy(() => import("../pages/Projects.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));
const NotFound = lazy(() => import("../pages/NotFound.jsx"));
const ProjectDetail = lazy(() => import("../pages/ProjectDetail.jsx"));

const SuspenseWrap = (el) => <Suspense fallback={<Loading />}>{el}</Suspense>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: SuspenseWrap(<Home />) },
      { path: "about", element: SuspenseWrap(<About />) },
      { path: "projects", element: SuspenseWrap(<Projects />) },
      { path: "projects/:slug", element: SuspenseWrap(<ProjectDetail />) },
      { path: "contact", element: SuspenseWrap(<Contact />) },
      { path: "*", element: SuspenseWrap(<NotFound />) },
    ],
  },
]);
