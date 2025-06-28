import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./components/layout.jsx", [
        index("./routes/home.tsx"),
        route("destinations", "./routes/destinations.jsx"),
        route("crew", "./routes/crew.jsx"),
        route("technology", "./routes/technology.jsx")

  ])
] satisfies RouteConfig;
