import { Router } from "express";
import { getLanguages } from "../controllers/languageController.js";

const router = Router();

// router.get("/:category", getMobilesByCategory);
// router.get("/mobile/:id", getMobileById);

router.get("/languages", getLanguages);

export default router;
