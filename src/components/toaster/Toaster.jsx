import { useSelector } from "react-redux";
import { toastsSelector } from "../../store/toaster";
import { Toast } from "./Toast";

export function Toaster() {
  const toasts = useSelector(toastsSelector);

  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 transform">
      <ul className="space-y-4">
        {toasts?.map((toast) => (
          <li key={toast.id}>
            <Toast {...toast} />
          </li>
        ))}
      </ul>
    </div>
  );
}
