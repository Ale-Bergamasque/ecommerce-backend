CREATE DATABASE ecommerce_market_cubos;

drop table if exists users;

create table users (
	id serial primary key,
  	store_name varchar(200) not null,
  	email varchar(200) not null unique,
    password varchar(200) not null 
);

drop table if exists categories;

create table categories (
	id serial primary key,
  	category varchar(200) not null UNIQUE
);

drop table if exists products;

create table products (
	id serial primary key,
  	user_id integer not null,
  	product_name varchar(200) not null,
  	category_id integer not null,
  	product_description varchar(2000) not null,
  	price integer not null,
  	stock integer not null,
  	product_photo text not null,
    photo_name varchar(200) not null,
  	foreign key (user_id) references users(id),
    foreign key (category_id) references categories(id)
);

INSERT INTO categories
	(category)
VALUES	
	('Acessórios'),
	('Alimentos'),
	('Beleza'),
	('Blusas'),
	('Calçadoss'),
	('Cama e Mesa'),
	('Celulares'),
	('Decoração'),
	('Esporte'),
	('Games'),
	('Informática'),
    ('Livros'),
	('Papelaria'),
    ('Pets')