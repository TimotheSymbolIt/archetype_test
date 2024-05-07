import express from "express";
// import cors from "cors";
const app = express();
const port = 3000;
import userRoutes from "./routes/userRoutes.js";

app.use("/users", userRoutes);

app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});
