import express from "express";
import morgan from "morgan";
import indexRoute from "./routes/url";
import routesDefault from "./routes/index";

const app = express();

// settings
app.set("port", process.env.PORT || 5000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/", routesDefault);
app.use("/api/url", indexRoute);

export default app;
