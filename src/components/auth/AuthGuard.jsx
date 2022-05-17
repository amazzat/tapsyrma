import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { userSelector } from "../../store/auth";

export function AuthGuard({ children }) {
  const user = useSelector(userSelector);
  const location = useLocation();

  if (user?.id) {
    return children;
  }

  return <Navigate to="/a/signin" state={{ from: location }} replace />;
}

export function AuthGuardPrevent({ children }) {
  const user = useSelector(userSelector);

  if (user?.id) {
    return <Navigate to="/" replace />;
  }

  return children;
}
