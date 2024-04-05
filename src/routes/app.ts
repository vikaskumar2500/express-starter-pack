import express from "express";
import { getHome } from "../controllers/app";

const router = express.Router();

router.get("/", getHome);

export default router;
