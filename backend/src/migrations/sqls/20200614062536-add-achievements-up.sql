CREATE TABLE achievement (
    id      serial PRIMARY KEY,
    user_id integer REFERENCES user_account (id),
    text    text 
);