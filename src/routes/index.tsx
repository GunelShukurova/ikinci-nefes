import Layout from "../layout/Layout";
import About from "../pages/About";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Services1 from "../pages/Services1";
import Services2 from "../pages/Services2";


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
        element: < Services/>,
        path: "services"
      },
      {
        element: < Services1/>,
        path: "services1"
      },
       {
        element: < Services2/>,
        path: "services2"
      },
    ],
  },
];

export default ROUTES;
