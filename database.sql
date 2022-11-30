CREATE DATABASE eyvadb;

CREATE TABLE products(
    job_id INTEGER PRIMARY KEY,
    job_name VARCHAR(255),
    job_url VARCHAR(255),
    job_status VARCHAR(255),
    updated_at TIMESTAMP,
    created_at TIMESTAMP
);