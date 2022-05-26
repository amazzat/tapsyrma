import { Route, Routes } from "react-router-dom";
import { AuthGuard, AuthGuardPrevent } from "./components/auth";
import { Home, SignIn, SignUp, Projects, Boards } from "./pages";

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
        {/* Recovery does not work yet */}
        {/* <Route
          path="recover"
          element={
            <AuthGuardPrevent>
              <Recover />
            </AuthGuardPrevent>
          }
        /> */}
      </Route>
      <Route
        path="projects"
        element={
          <AuthGuard>
            <Projects />
          </AuthGuard>
        }
      />

      <Route 
        path="/projects/:id"
        element={
          <AuthGuard>
            <Boards />
          </AuthGuard>
        }  
      />
    </Routes>
  );
}
