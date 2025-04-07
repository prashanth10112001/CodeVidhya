import { Router } from "express";
import { getDsaData } from "../controllers/dsaController.js";

const router = Router();

// router.get("/:category", getMobilesByCategory);
// router.get("/mobile/:id", getMobileById);

router.get("/dsa", getDsaData);

export default router;
