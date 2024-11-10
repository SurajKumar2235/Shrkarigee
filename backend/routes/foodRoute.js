import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";
import path from "path";

// Image Storage Engine with Absolute Path
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = "/home/ubuntu/MYAPP/t2/backend/uploads";
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

const foodRouter = express.Router();

// Routes
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
