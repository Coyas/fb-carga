-- Up
CREATE TABLE Item (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user TEXT,
    pass TEXT
);

--Down
DROP TABLE Item;