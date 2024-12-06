import { createBrowserRouter } from "react-router-dom";

import { GuestRoute } from "@/middleware/GuestRoute";
import { ProtectedRoute } from "@/middleware/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestRoute />,
    children: [
      {
        path: "/",
        lazy: async () => {
          const { HomePage } = await import("@/pages");
          return { Component: HomePage };
        },
      },
      {
        path: "/register",
        lazy: async () => {
          const { RegisterPage } = await import("@/pages/register");
          return { Component: RegisterPage };
        },
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        lazy: async () => {
          const { DashboardPage } = await import("@/pages/dashboard");
          return { Component: DashboardPage };
        },
      },
      {
        path: "/quizzes/create",
        lazy: async () => {
          const { CreateQuizPage } = await import("@/pages/quizzes/create");
          return { Component: CreateQuizPage };
        },
      },
    ],
  },
]);
