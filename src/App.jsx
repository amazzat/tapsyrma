import { Route, Routes } from "react-router-dom";
import { Home, SignIn } from "./pages";
import { AuthGuard } from "./components/auth";

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthGuard>
            <Home />
          </AuthGuard>
        }
      />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}
