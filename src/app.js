import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About.jsx";
import Headers from "./components/Headers.jsx";
import Body from "./components/Body.jsx";
import Contact from "./components/Contact.jsx";
import Help from "./components/Help.jsx";
import ResMenu from "./components/ResMenu.jsx";
import Error from "./components/Error.jsx";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="application">
      <Headers />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/help",
          element: <Help />,
        },
        {
          path: "/restaurants/:id",
          element: <ResMenu />,
        },
      ],
      errorElement: <Error />,
    },
  ],
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);