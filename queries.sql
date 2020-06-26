CREATE TABLE users (
    id serial primary key,
    username varchar,
    email varchar,
    user_password varchar
);

CREATE TABLE pulls (
    id serial primary key,
    user_id integer references users(id),
    brand varchar,
    roast varchar,
    grind varchar,
    weight_grind decimal,
    weight_pull decimal,
    pull_time int,
    rating int,
    favorite int,
    notes varchar,
    show int
);

INSERT INTO pulls (user_id, brand, roast, grind, weight_grind, weight_pull, pull_time, rating, favorite, notes, show)
VALUES (1, 'Test Brand', 'Dark', 'Coarse', 20.1, 230, 30, 3, 1, 'Basic coffee notes.', 1);

INSERT INTO users (username, email, user_password) VALUES ('Expresso', 'admin@email.com', 'password');