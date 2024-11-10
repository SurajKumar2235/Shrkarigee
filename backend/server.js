import express from "express";
import cors from "cors";
import https from "https";
import fs from "fs";
import path from "path";

import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['https://sanskritighee.com', 'https://52.66.205.5'],// Frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

// Database Connection
connectDB();

// Static Files Middleware (Absolute Path)
app.use("/images", express.static("/home/ubuntu/MYAPP/t2/backend/uploads"));

// API Routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

// SSL Configuration
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/sanskritighee.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/sanskritighee.com/fullchain.pem'),
};

// Start HTTPS Server
https.createServer(options, app).listen(port, () => {
    console.log(`HTTPS Server started on https://sanskritighee.com:${port}`);
});
