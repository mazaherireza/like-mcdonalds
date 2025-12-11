import routes from "../../routes";
import { useRoutes } from "react-router";

export default function Container() {
  const router = useRoutes(routes);

  return <>{router}</>;
}
