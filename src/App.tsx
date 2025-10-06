import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Companies from "./pages/Companies";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Companies />
    </QueryClientProvider>
  );
}

export default App;
