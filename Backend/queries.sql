-- creating customer database --
CREATE TABLE customer(
	id SERIAL PRIMARY KEY,
	first_name TEXT,
	last_name TEXT
);

--creating food item database --
CREATE TABLE food_item(
	id SERIAL PRIMARY KEY,
	name VARCHAR(100),
	price MONEY
);

--creating order database --
CREATE TABLE orders(
	id SERIAL PRIMARY KEY,
	customer_id INTEGER REFERENCES customer(id),
	is_active BOOLEAN
);

--many to many relationship with order and food_item--
--with order_recors table --
CREATE TABLE order_records(
  order_id INTEGER REFERENCES orders(id),
  food_id INTEGER REFERENCES food_item(id),
  PRIMARY KEY (order_id, food_id)
);

-- Creating cart table --
CREATE TABLE cart(
	customer_id INTEGER REFERENCES customer(id),
	PRIMARY KEY(customer_id)
);

-- Creating cart_items table --
CREATE TABLE cart_items(
  cart_id INTEGER REFERENCES cart(customer_id) ON DELETE CASCADE,
  food_id INTEGER REFERENCES food_item(id),
  quantity INTEGER DEFAULT 1,
  PRIMARY KEY (cart_id, food_id)
);
