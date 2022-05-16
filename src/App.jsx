import { Route, Routes } from "react-router-dom";
import { State, Home } from "./pages";

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col bg-zinc-900 space-y-2">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/state" element={<State />} />
      </Routes>
    </div>
  );
}
