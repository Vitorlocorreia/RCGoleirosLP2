import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("print") === "true") {
      document.body.classList.add("print-mode");
    } else {
      document.body.classList.remove("print-mode");
    }
  }, []);

  const isPrintMode = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("print") === "true";

  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion={isPrintMode ? "always" : "never"}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </MotionConfig>
    </QueryClientProvider>
  );
};

export default App;
