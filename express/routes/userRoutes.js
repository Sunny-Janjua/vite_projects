import express from "express";
import { homeController } from "../controller/userController.js";
import { signupPageController } from "../controller/userController.js";
import { signupController } from "../controller/userController.js";
import { loginPageController } from "../controller/userController.js";
import { loginController } from "../controller/userController.js";

const router = express.Router();
router.get("/", homeController);
router.get("/signup", signupPageController);
router.post("/signup", signupController);
router.get("/login", loginPageController);
router.post("/login", loginController);

export default router;
