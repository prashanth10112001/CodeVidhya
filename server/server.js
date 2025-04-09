import express, { json } from "express";
import cors from "cors";
// import { connect } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());

// connect();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} : ✅`);
});
