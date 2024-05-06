import { pool } from "../db/pool.js";

async function getAllUsers(req, res, next) {
	try {
		pool.query("SELECT * FROM app_user", (error, results) => {
			if (error) {
				throw error;
			}
			return res.status(200).json({
				nbDatas: results.rowCount,
				datas: results.rows,
			});
		});
	} catch (err) {
		next(err);
	}
}

async function sendUsersToFirebase(req, res, next) {

}

export { getAllUsers, sendUsersToFirebase };
