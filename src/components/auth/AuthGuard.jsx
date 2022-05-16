import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { userSelector } from "../../store/auth";

export function AuthGuard({ children }) {
  const user = useSelector(userSelector);
  const location = useLocation();

  return user.id === undefined ? (
    children
  ) : (
    <Navigate to="signin" state={{ from: location }} replace />
  );
}
