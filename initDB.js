var sqlite3 = require("sqlite3").verbose(); // o verbose é opcional
let db = new sqlite3.Database("./db/data.sqlite");

db.serialize(function () {
	db.run("CREATE TABLE IF NOT EXISTS Item (user TEXT,pass TEXT);");

	// var stmt = db.prepare("INSERT INTO Item VALUES (?,?, ?)");
	// for (var i = 0; i < 10; i++) {
	// 	stmt.run(i, "Ipsum " + i, "tress " + i);
	// }
	// stmt.finalize();

	db.each("SELECT user, pass FROM Item", function (err, row) {
		console.log(row.user + " :: " + row.pass);
	});
});

db.close();
