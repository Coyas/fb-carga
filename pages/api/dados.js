var sqlite3 = require("sqlite3").verbose(); // o verbose é opcional

export default async function dados(req, res) {
	console.log("req.body");
	const { user, pass } = req.body;

	console.log(`${user} :: ${pass}`);

	const db = new sqlite3.Database("./db/data.sqlite");

	var stmt = db.prepare("INSERT INTO Item VALUES (? , ?)");

	stmt.run(user, pass);

	stmt.finalize();

	db.serialize(function () {
		db.each("SELECT user, pass FROM Item", function (err, row) {
			console.log("==> " + row.user + " :: " + row.pass);
		});
	});

	res.status(200).json({ dados: "ok" });
}
