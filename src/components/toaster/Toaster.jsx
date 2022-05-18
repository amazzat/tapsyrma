import { LazyMotion } from "framer-motion";
import { useSelector } from "react-redux";
import { toastsSelector } from "../../store/toaster";
import { Toast } from "./Toast";

const loadFeatures = () =>
  import("../../lib/framerFeatures").then((res) => res.default);

export function Toaster() {
  const toasts = useSelector(toastsSelector);

  return (
    <LazyMotion features={loadFeatures} strict>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 transform">
        <ul className="space-y-4">
          {toasts?.map((toast) => (
            <li key={toast.id}>
              <Toast {...toast} />
            </li>
          ))}
        </ul>
      </div>
    </LazyMotion>
  );
}
