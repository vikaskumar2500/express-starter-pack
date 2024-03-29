// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path, { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
/*
 * Load up and parse configuration details from
 * the `.env` file to the `process.env`
 * object of Node.js
 */
dotenv.config();

/*
 * Create an Express application and get the
 * value of the PORT environment variable
 * from the `process.env`
 */
const app: Express = express();
const port = process.env.PORT || 3000;

/*
static path
*/
app.use(express.static(path.join(__dirname, "public")));

/* cookie-parser */

app.use(cookieParser());

/* set engine */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Define a route for the root path ("/")
 using the HTTP GET method */
app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript");
});

/* Start the Express app and listen
 for incoming requests on the specified port */
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
