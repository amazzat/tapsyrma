import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useRecovery() {
  const navigate = useNavigate();

  useEffect(() => {
    const { href } = window.location;
    const isRecovery = href.includes("type=recovery");

    if (isRecovery) {
      const accessToken = href
        .split("#")[1]
        .split("&")
        .find((param) => param.includes("access_token"))
        .split("=")[1];

      navigate({
        pathname: "/a/recover",
        search: `access_token=${accessToken}`
      });
    }
  }, [navigate]);
}
