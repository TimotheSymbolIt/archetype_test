import { pool } from "../db/pool.js";
import * as firebase from "../db/firebase.js";
import {
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	doc,
} from "firebase/firestore/lite";

async function getAllUsers(req, res, next) {
	try {
		// pool.query("SELECT * FROM app_user", (error, results) => {
		// 	if (error) {
		// 		throw error;
		// 	}
		// 	console.log(results.rows);
		// 	return res.status(200).json({
		// 		nbDatas: results.rowCount,
		// 		datas: results.rows,
		// 	});
		// });

		const citiesCol = collection(firebase.firebaseDb, "users");
		const citySnapshot = await getDocs(citiesCol);

		const users = [];
		const cityList = citySnapshot.docs.map((doc) => {
			users.push(doc.data());
		});

		console.log(users);

		return res.status(200).json({
			users,
		});
	} catch (err) {
		next(err);
	}
}

async function addUser(req, res, next) {
	try {
		const users = pool.query("SELECT * FROM app_user", (error, results) => {
			if (error) {
				throw error;
			}
			results.rows.forEach((user) => {
				addDoc(collection(firebase.firebaseDb, "users"), {
					name: user.username,
					score: user.score,
				});
			});

			return res.status(201).json("OK, c'est envoyé");
		});

		// console.log("first aaa");
		//
		// return res.status(201).json({ docRef });
	} catch (error) {
		next();
	}
}

async function deleteAUser(req, res, next) {
	try {
		await deleteDoc(doc(firebase.firebaseDb, "test", "1"));
		return res.status(201).json("OK, c'est supprimé");
	} catch (error) {
		console.log(error);
		next();
	}
}

export { getAllUsers, addUser, deleteAUser };
