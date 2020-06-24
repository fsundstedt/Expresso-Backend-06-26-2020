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