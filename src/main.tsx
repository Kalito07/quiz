import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "@/router.tsx";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { AuthProvider } from "@/components/providers/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
);
