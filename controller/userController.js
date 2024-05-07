import * as userService from "../services/userServices.js";

async function getAllUsers(req, res, next) {
	try {
		const response = await userService.getAllUsers(req, res, next);
		return response;
	} catch (error) {
		next();
	}
}

async function addUser(req, res, next) {
	try {
		const response = await userService.addUser(req, res, next);
		return response;
	} catch (error) {
		next();
	}
}
async function deleteAllUsers(req, res, next) {
	try {
		const response = await userService.deleteAllUsers(req, res, next);
		return response;
	} catch (error) {
		next();
	}
}

export { getAllUsers, addUser, deleteAllUsers };
