var sqlite3 = require("sqlite3").verbose(); // o verbose é opcional

export default function dados(req, res) {
	const db = new sqlite3.Database("./data-test.sqlite");
	const dados = await db.all("SELECT user, pass FROM Item");
	res.status(200).json({ dados});
}
