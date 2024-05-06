import express from "express";
const ROUTER = express.Router();

import * as userController from "../controller/userController.js";

// Retrieve all users

ROUTER.get("/", userController.getAllUsers);

export default ROUTER