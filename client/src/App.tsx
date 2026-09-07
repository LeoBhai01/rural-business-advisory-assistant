import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";

export default function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Home />
    </>
  );
}
