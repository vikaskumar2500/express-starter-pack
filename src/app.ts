import express, { Request, Response } from "express";
import path from "path";

import router from "./routes/app";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));

// app.use(express.static(path.join(__dirname+"public")))

app.use(router);

app.listen(3000);
