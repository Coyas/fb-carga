var sqlite3 = require("sqlite3").verbose(); // o verbose é opcional
var db = new sqlite3.Database("./db/data.sqlite");
// var db = new sqlite3.Database("./data-test.sqlite");

db.serialize(function () {
	db.each("SELECT user, pass FROM Item", function (err, row) {
		console.log("==> " + row.user + " :: " + row.pass);
	});
});

db.close();
