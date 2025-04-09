import express from "express";
import {
  getDsaData,
  getDsaQuestionsById,
} from "../controllers/dsaController.js";

const router = express.Router();

router.get("/dsaData", getDsaData);
router.get("/dsaQuestions", getDsaQuestionsById);

export default router;
