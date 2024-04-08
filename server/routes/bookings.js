import express from "express";
import {
  bookReservation,
  searchUsersBookingDetails,
} from "../controllers/booking.js";

const router = express.Router();

router.post("/", bookReservation);
router.get("/", searchUsersBookingDetails);
export default router;
