import { useLocation } from "react-router-dom";

export default function Details() {
  const { state } = useLocation();

  return <div>Details {state}</div>;
}
