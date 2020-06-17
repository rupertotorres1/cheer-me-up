CREATE TABLE user_account (
    id          serial PRIMARY KEY,
    provider_id text UNIQUE,
    name        text 
);