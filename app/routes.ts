import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("swap", "routes/swap.tsx"),
  route("addLiquidity", "routes/AddLiquidity.tsx"),
  route("removeLiquidity", "routes/RemoveLiquidity.tsx"),
] satisfies RouteConfig;
