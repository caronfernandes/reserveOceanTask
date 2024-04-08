import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import rooms from "./routes/rooms.js";
import bookings from "./routes/bookings.js";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(cors());

app.use("/api/v1/room", rooms);
app.use("/api/v1/booking", bookings);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
