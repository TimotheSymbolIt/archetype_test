import { ALL } from "dns";
import * as userService from "../services/userServices.js";

async function getAllUsers(req, res, next) {
	try {
		const ALL_USERS = await userService.getAllUsers(req, res, next);
		return ALL_USERS;
	} catch (err) {
		next(err);
	}
}

export { getAllUsers };
