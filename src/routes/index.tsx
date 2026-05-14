import Layout from "../layout/Layout";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Blog1 from "../pages/Blog1";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Services1 from "../pages/Services1";
import Specialist1 from "../pages/Specialist1";

import Specialists from "../pages/Specialists";
import Tests from "../pages/Tests";

const ROUTES = [
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <About />,
        path: "about",
      },
      {
        element: <Services />,
        path: "services",
      },
      {
        element: <Services1 />,
        path: "services1",
      },

      {
        element: <Specialists />,
        path: "psychologists",
      },
      {
        element: <Specialist1 />,
        path: "psychologist1",
      },
      {
        element: <Tests />,
        path: "tests",
      },
        {
        element: <Blog1 />,
        path: "blog1",
      },
      {
        element: <Blog />,
        path: "blog",
      },
        {
        element: <Contact />,
        path: "contact",
      },
    ],
  },
];

export default ROUTES;
