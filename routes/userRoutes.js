import express from "express";
const ROUTER = express.Router();

import * as userController from "../controller/userController.js";

// Retrieve all users

ROUTER.get("/", userController.getAllUsers);

ROUTER.post("/add", userController.addUser)

ROUTER.delete("/delete/:id", userController.deleteAUser)

export default ROUTER;
