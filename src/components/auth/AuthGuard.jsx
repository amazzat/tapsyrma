import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthLoadingSelector, userSelector } from "../../store/auth";
import { Emoji } from "../loader/Emoji";

export function AuthGuard({ children }) {
  const user = useSelector(userSelector);
  const location = useLocation();

  const isAuthLoading = useSelector(isAuthLoadingSelector);

  if (isAuthLoading) {
    return <Emoji />;
  }

  return user?.id ? (
    children
  ) : (
    <Navigate to="signin" state={{ from: location }} replace />
  );
}
