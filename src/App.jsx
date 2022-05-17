import { Route, Routes } from "react-router-dom";
import { AuthGuard, AuthGuardPrevent } from "./components/auth";
import { useRecovery } from "./lib/hooks";
import { Home, Recover, SignIn, SignUp } from "./pages";

export function App() {
  useRecovery();

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
      <Route path="a">
        <Route
          path="signin"
          element={
            <AuthGuardPrevent>
              <SignIn />
            </AuthGuardPrevent>
          }
        />
        <Route
          path="signup"
          element={
            <AuthGuardPrevent>
              <SignUp />
            </AuthGuardPrevent>
          }
        />
        <Route
          path="recover"
          element={
            <AuthGuardPrevent>
              <Recover />
            </AuthGuardPrevent>
          }
        />
      </Route>
    </Routes>
  );
}
