-- Active: 1699396819942@@127.0.0.1@3306
CREATE TABLE cryptocoins (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	name TEXT NOT NULL UNIQUE,
	acronym TEXT UNIQUE NOT NULL,
	price_in_dollars REAL NOT NULL
);

INSERT INTO cryptocoins (id, name, acronym, price_in_dollars)
VALUES
	('c001', 'Bitcoin', 'BTC', 35364.70),
	('c002', 'Ethereum', 'ETH', 1833.17);