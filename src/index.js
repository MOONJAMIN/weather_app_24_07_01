import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobarStyled } from "./GlobarStyled";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <GlobarStyled />
        <Router />
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
