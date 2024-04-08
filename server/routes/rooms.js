import express from "express";
import { getAvailableRooms } from "../controllers/room.js";

const router = express.Router();

router.get("/availablity/", getAvailableRooms);
export default router;
