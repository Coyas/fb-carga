var sqlite3 = require("sqlite3").verbose(); // o verbose é opcional
var db = new sqlite3.Database("./data-test.sqlite");

db.serialize(function () {
	db.run(
		"CREATE TABLE Item (id INTEGER PRIMARY KEY AUTOINCREMENT,user TEXT,pass TEXT);"
	);

	var stmt = db.prepare("INSERT INTO Item VALUES (?,?, ?)");
	for (var i = 0; i < 10; i++) {
		stmt.run(i, "Ipsum " + i, "tress " + i);
	}
	stmt.finalize();

	db.each("SELECT user, pass FROM Item", function (err, row) {
		console.log(row.user + " :: " + row.pass);
	});
});

db.close();
